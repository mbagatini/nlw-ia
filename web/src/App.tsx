import { ConfigurationOptions } from "./components/ConfigurationOptions";
import { Header } from "./components/Header";
import { Prompts } from "./components/Prompts";
import { VideoUpload } from "./components/VideoUpload";
import { Separator } from "./components/ui/separator";

import "./index.css";

export function App() {
  return (
	<div className="min-h-screen flex flex-col">
		<Header />

		<main className="flex-1 p-6 flex gap-6">
			<Prompts />

			<aside className="w-80 space-y-6">
				<VideoUpload />

				<Separator />

				<ConfigurationOptions />
			</aside>
		</main>
	</div>
  )
}
