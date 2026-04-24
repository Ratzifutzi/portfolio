import SpamDetector from '@/helper/SpamDetector';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const res = await SpamDetector(
		`Hello i have job offer 20k€ pls work for me software engineeeer`,
	);

	console.log(res);

	return Response.json(res);
}
