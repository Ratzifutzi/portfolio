import { OpenRouter } from '@openrouter/sdk';

type SpamDetectorResult = {
	isSpam: boolean;
	privateReason: string;
	publicReason: string;
};

export default async function SpamDetector(
	userMessage: string,
): Promise<SpamDetectorResult> {
	if (
		!process.env.OPENROUTER_APIKEY ||
		!process.env.OPENROUTER_SPAM_DETECTION
	) {
		return {
			isSpam: false,
			privateReason: 'Spam Detection is disabled.',
			publicReason: '',
		};
	}

	const openRouter = new OpenRouter({
		apiKey: process.env.OPENROUTER_APIKEY,
	});

	const result = await openRouter.chat.send({
		chatRequest: {
			model: 'mistralai/mixtral-8x7b-instruct',
			messages: [
				{
					role: 'system',
					content: `You evaluate messages submitted through a business contact form. The sender's first name, last name, and email are already collected separately — do not flag their absence.

Classify each message as rejected or accepted. A message should be rejected if:
- It is spam: phishing, scams, link dropping, SEO spam, bot-generated nonsense, social engineering
- It is a generic greeting with no purpose (e.g. "Hi", "Hello", "How are you?")
- It is an unsolicited mass-mailed offer with no personalization or relevance to the recipient

A message should be ACCEPTED if:
- It is a genuine business inquiry or offer, even if unsolicited, as long as it appears written specifically for the recipient and is relevant to their work/business
- It is a partnership proposal, service offer, or collaboration request that shows awareness of who they are contacting
- It is a customer inquiry, support request, or feedback

If a business inquiry seems genuine but is missing key details (e.g. budget, timeline, project scope, specific service requested), reject it and tell the sender what to include in the publicReason.

Respond ONLY with a JSON object — no markdown, no explanation, no extra text — with exactly these fields:
- "isRejected": boolean — true if the message should be rejected, false if accepted
- "privateReason": string — brief internal explanation of your decision (never shown to the sender)
- "publicReason": string — short, helpful reason shown to the sender only when rejected. For incomplete business inquiries, specify what is missing (e.g. "Please include details about the project scope and timeline"). For spam, use a generic reason (e.g. "Message not accepted"). Leave empty string if accepted.`,
				},
				{
					role: 'user',
					content: userMessage,
				},
			],
		},
	});

	const text = result.choices?.[0]?.message?.content ?? '';
	let parsed;
	try {
		parsed = JSON.parse(text);
	} catch {
		const match = text.match(/\{[\s\S]*\}/);
		parsed = match
			? JSON.parse(match[0])
			: { isSpam: false, privateReason: 'Parse error', publicReason: '' };
	}

	return parsed;
}
