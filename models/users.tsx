import { model, Schema } from 'mongoose';

interface UrlData {
	id: string; // para `https://ezlink.com/:id`
	url: string; // para la redireccion del link. ejemplo: https://google.com/foo
	clicks: number; // contador de clicks
}

interface User {
	mail: string;
	password: string; // aunque obviamente esta hasheada
	urls: UrlData[];
}

const m = model<User>(
	'Users',
	new Schema({
		mail: { type: String, required: true },
		password: { type: String, required: true },
		urls: [
			{
				id: { type: String, required: true },
				url: { type: String, required: true },
				clicks: { type: Number, required: false, default: 0 },
			},
		],
	}),
);

export default m;
