import { NextApiRequest, NextApiResponse } from 'next';
import UrlData from 'models/url';
import { connect } from 'mongoose';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { method } = req;

	if (method !== 'GET') {
		return res.status(400).json({ message: 'Only GET requests are allowed' });
	}

	await connect(
		'mongodb+srv://gent:QmlGGVS1c2mcL5uU@ezlink.ivflqcd.mongodb.net/?retryWrites=true&w=majority',
	);

	const { code } = req.query;

	if (typeof code === 'string') {
		const data = await UrlData.findOneAndUpdate(
			{ id: code },
			{ $inc: { clicks: 1 } },
		);

		if (!data) {
			return res.status(400).json({
				message: 'Invalid short URL code',
			});
		}

		data.save();
		return res.redirect(data.url);
	}

	return res.status(400).json({
		message: 'Invalid typeof',
	});
}
