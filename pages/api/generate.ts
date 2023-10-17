import { connect } from 'mongoose';
import UrlData from 'models/url';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
	code: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { url } = req.body;
	await connect(
		'mongodb+srv://gent:QmlGGVS1c2mcL5uU@ezlink.ivflqcd.mongodb.net/?retryWrites=true&w=majority',
	);

	const code = await postUrl(url);

	return res.status(200).json({ code });
}

const postUrl = async (url: string) => {
	const code = create_url();
	const data = new UrlData({ id: code, url, clicks: 0 });

	await data.save();
	return code;
};

function create_url(): string {
	const shortUrl = Math.random().toString(36).slice(2, 10);

	return shortUrl;
}
