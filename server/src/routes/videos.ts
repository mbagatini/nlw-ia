import { FastifyInstance } from "fastify"
import { fastifyMultipart } from '@fastify/multipart'
import { randomUUID } from "node:crypto"
import { promisify } from "node:util"
import { pipeline } from "node:stream"
import path from "node:path"
import fs from "node:fs"
import { prisma } from "@/lib/prisma"

const pump = promisify(pipeline)

export async function videoRoutes(app: FastifyInstance) {
	app.register(fastifyMultipart, {
		limits: {
			fileSize: 1024 * 1024 * 25 // 25mb
		}
	})

	app.post('/video', async (request, reply) => {
		const data = await request.file()

		if (!data) {
			return reply.status(400).send({ message: 'No file uploaded' })
		}

		const extension = path.extname(data.filename)

		if (extension !== '.mp3') {
			return reply.status(400).send({ message: 'Invalid input type, only MP3 files are accepted' })
		}
		
		const fileBaseName = path.basename(data.filename, extension)
		const fileUploadBaseName = `${fileBaseName}-${randomUUID()}${extension}`
		const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadBaseName)

		await pump(data.file, fs.createWriteStream(uploadDestination))

		const video = await prisma.video.create({
			data: {
				name: data.filename,
				path: uploadDestination
			}
		})

		return {
			video
		}
	})
}