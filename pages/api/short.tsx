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
	console.log(req.body);
	const url = req.body.url;

	const code = '1234';
	const model = new UserData({
		mail: 'hola@gmail.com',
		password: '1234',
		urls: [{ id: code, url: url, clicks: 0 }],
	});
	await model.save();
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
		send({ message: result.urls[0].url });
		// redirect(result.urls[0].url);
	}
};

export const config = {
	api: {
		bodyParser: true,
	},
};
