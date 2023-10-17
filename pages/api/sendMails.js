import { Resend } from 'resend';
const resend = new Resend('re_4pETfACU_NavZrv85RB4EsQsL8ZLevGDG');

export default async (req) => {
	console.log(`req: ${req.body}`);
	await resend.emails.send({
		from: 'EzLink <onboarding@resend.dev>',
		to: `${req.body}`,
		subject: 'Reset your EzLink password!',
		html: '<strong>Click <a href = "https://www.google.com">here</a> to reset your EzLink password!</strong>',
	});
};
