import { connect } from 'mongoose';
import UserData from '../../models/users';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	if (req.method === 'POST') {
		await postUrl(req, res);
	} else {
		await getUrl(req, res);
	}
	res.status(200).json({ message: 'Hello from Next.js!' });
}

const database = await connect(
	'mongodb+srv://gent:QmlGGVS1c2mcL5uU@ezlink.ivflqcd.mongodb.net/?retryWrites=true&w=majority',
);

const postUrl = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) => {
	const url = req.body.url;
	const mail = 'hola@gmail.com';
	const code = create_url();
	const user = await UserData.findOne({ mail, password: '1234' });
	if (!user) {
		const model = new UserData({
			mail,
			password: '1234',
			urls: [{ id: code, url: url, clicks: 0 }],
		});
		await model.save();
	} else {
		user.urls.push({ id: code, url: url, clicks: 0 });
		user.save();
	}

	res.send({ message: code });
};

const getUrl = async (
	{ query }: NextApiRequest,
	{ send, redirect }: NextApiResponse<ResponseData>,
) => {
	const code = query.code;
	const result = await UserData.findOne({
		urls: {
			$elemMatch: { id: code },
		},
	});

	if (result) {
		redirect(result.urls[0].url);
	}
};

export const config = {
	api: {
		bodyParser: true,
	},
};

function create_url(): string {
	const shortUrl = Math.random().toString(36).slice(0, 5);

	return shortUrl;
}
