import SpamDetector from '@/helper/SpamDetector';
import {
	ContactFormInterface,
	contactFormSchema,
} from '@/interfaces/forms/ContactFormInterface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		// Validate form data with Zod
		const validationResult = contactFormSchema.safeParse(body);

		if (!validationResult.success) {
			console.log('validation errors', validationResult.error);

			return NextResponse.json(
				{
					success: false,
					errors: validationResult.error.flatten().fieldErrors,
				},
				{ status: 400 },
			);
		}

		const data: ContactFormInterface = validationResult.data;

		// Check for spam
		const spamCheck = await SpamDetector(
			`${data.firstName} ${data.lastName} ${data.contactMail} ${data.message}`,
		);

		if (spamCheck.isRejected) {
			console.warn('Spam attempt blocked:', { email: data.contactMail });
			return NextResponse.json(
				{ success: false, message: spamCheck.reason },
				{ status: 200 },
			);
		}

		console.log('Message not spam! Sending mail');

		// TODO: Send email or save to database here
		// Example: await sendEmail(data);

		return NextResponse.json(
			{ success: true, message: 'Message sent successfully' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Form submission error:', error);
		return NextResponse.json(
			{ success: false, error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
