import { z } from 'zod';

export interface ContactFormInterface {
	firstName: string;
	lastName?: string;
	contactMail: string;
	message: string;
	privacyPolicy: 'on' | 'off';
	captchaSolution: string;
}

export const contactFormSchema = z.object({
	firstName: z.string().trim().min(1, 'First name is required'),
	lastName: z.string().trim().optional(),
	contactMail: z.string().trim().email('Invalid email address format'),
	message: z.string().trim().min(50, 'Message must be at least 50 characters'),
	privacyPolicy: z.enum(['on', 'off'], {
		message: 'You must accept the Privacy Policy',
	}),
	captchaSolution: z.string().min(1, 'Captcha verification is required'),
});
