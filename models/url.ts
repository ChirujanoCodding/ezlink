import { Model, model, models, Schema } from 'mongoose';

interface UrlData {
	id: string; // para `https://ezlink.com/:id`
	url: string; // para la redireccion del link. ejemplo: https://google.com/foo
	clicks: number; // contador de clicks
}

const m =
	(models.urls as Model<UrlData>) ??
	model<UrlData>(
		'urls',
		new Schema({
			id: { type: String, required: true },
			url: { type: String, required: true },
			clicks: { type: Number, required: false, default: 0 },
		}),
	);

export default m as Model<UrlData>;
