import { fastify } from 'fastify'
import { promptRoutes } from './routes/prompts'
import { videoRoutes } from './routes/videos'

const app = fastify()

app.register(promptRoutes)
app.register(videoRoutes)

app.listen({
	port: 3333,
}).then(() => {
	console.log('✅ Server is running on port 3333')
})