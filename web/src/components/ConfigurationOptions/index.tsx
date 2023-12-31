import { Wand2 } from "lucide-react";
import { Button } from "../ui/button";

import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";

export function ConfigurationOptions() {
	return (
		<form className="space-y-6">
			<div className="space-y-2">
				<Label>Prompt</Label>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Selecione um prompt" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="title">Título do YouTube</SelectItem>
						<SelectItem value="description">Descrição do YouTube</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<Separator />

			<div className="space-y-2">
				<Label>Modelo</Label>
				<Select defaultValue="gpt3.5" disabled>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="gpt3.5">GTP 3.5-turbo 16k</SelectItem>
					</SelectContent>
				</Select>
				<span className="block text-sm text-muted-foreground italic">
					Você poderá customizar esta opção em breve.
				</span>
			</div>

			<Separator />

			<div className="space-y-4">
				<Label>Temperatura</Label>
				
				<Slider min={0} max={1} step={0.1} />

				<span className="block text-sm text-muted-foreground italic">
					Valores mais altos tendem a gerar textos mais criativos, mas menos coerentes.
				</span>
			</div>

			<Separator />

			<Button type="submit" className="w-full">
				Executar
				<Wand2 className="w-4 h-4 ml-2" />
			</Button>
		</form>
	)
}