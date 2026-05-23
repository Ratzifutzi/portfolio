import { OpenRouter } from '@openrouter/sdk';

type SpamDetectorResult = {
	isRejected: boolean;
	reason: string; // Brief 3-4 word explanation
};

export default async function SpamDetector(
	userMessage: string,
): Promise<SpamDetectorResult> {
	if (
		!process.env.OPENROUTER_APIKEY ||
		!process.env.OPENROUTER_SPAM_DETECTION
	) {
		return {
			isRejected: false,
			reason: '',
		};
	}

	const openRouter = new OpenRouter({
		apiKey: process.env.OPENROUTER_APIKEY,
	});

	const result = await openRouter.chat.send({
		chatRequest: {
			model: 'google/gemini-2.5-flash',
			messages: [
				{
					role: 'system',
					content: `You are an advanced spam and scam detection system for contact form submissions.
Your primary objective is to identify and filter out obvious spam, phishing attempts, scams, and malicious bot activity while ensuring legitimate inquiries and high-value business opportunities are never incorrectly blocked.

CLASSIFICATION RULES:

1. REJECT (isRejected: true) if the message contains:
   - Obvious spam indicators:
     * Generic mass-marketing language ("Click here to win", "Limited time offer", "Act now")
     * Unsolicited promotional content with no personalization or context
     * Repetitive or auto-generated text patterns
   
   - Phishing attempts:
     * Requests to verify accounts, credentials, or personal information
     * Urgent security warnings ("Your password expired", "Account suspended")
     * Suspicious links requesting login or payment details
   
   - Scam offers:
     * Too-good-to-be-true propositions ("Free money", "Guaranteed income")
     * Unsolicited investment opportunities or financial schemes
     * Prize notifications or lottery wins
     * Inheritance or money transfer requests
   
   - Malicious bot activity:
     * Incoherent gibberish with embedded links or suspicious patterns
     * Multiple unrelated URLs or promotional links
     * Base64 or encoded content suggesting obfuscation
   
   - Low-quality unsolicited service offers:
     * Generic, mass-sent templates with zero personalization
     * No mention of your specific business, industry, or website
     * Obvious copy-paste messages sent to thousands ("Dear Sir/Madam")
     * Aggressive sales language with no value proposition
     * Messages that are clearly automated or bot-generated
     * Offers with suspicious grammar, broken English (unless context suggests legitimate non-native speaker)
     * Guest posting, backlink exchange, or link-building spam

2. ACCEPT (isRejected: false) for ALL other messages, including:
   - Generic greetings or introductions ("Hi", "Hello", "Good morning")
   - Business inquiries (even if vague, incomplete, or poorly written)
   - Legitimate customer support requests
   - Questions about YOUR products or services
   - Requests for help (e.g., "I need SEO help for MY website")
   - Partnership inquiries with reasonable context
   - Short or minimal messages that aren't clearly spam
   - Messages in other languages that appear legitimate
   - Test messages or form checks
   
   - HIGH-VALUE service offers that show personalization:
     * Mentions your specific company name, website, or industry
     * References specific pages, products, or content from your site
     * Demonstrates knowledge of your business or challenges
     * Professional tone with clear value proposition
     * Personalized introduction or relevant case studies
     * Reasonable, professional service offers (SEO, design, development, consulting)
     * Messages from agencies or professionals with specific suggestions or insights

CRITICAL DISTINCTIONS:
- REJECT: "Hi, we provide SEO services to increase rankings. Interested?" (generic template)
- ACCEPT: "I noticed your website ranks for X but could improve Y. We specialize in Z for [your industry]." (personalized, specific)
- REJECT: "Dear Webmaster, we offer cheap backlinks" (mass-sent spam)
- ACCEPT: "Saw your article on [topic]. We help companies like yours with [specific service]. Can we discuss?" (targeted outreach)
- ACCEPT: "Can you help with SEO for my website?" (request for YOUR services)

KEY PRINCIPLE:
When evaluating unsolicited service offers, look for signs of genuine personalization and research. If the sender demonstrates they've actually looked at your business and offers something potentially valuable, ACCEPT it. Only REJECT obvious mass-sent, generic, or low-effort spam.

RESPONSE FORMAT:
Return ONLY a valid JSON object with exactly two fields:
{
  "isRejected": boolean,
  "reason": string
}

Field specifications:
- "isRejected": true if spam/scam detected, false otherwise
- "reason": A concise 3-5 word explanation if rejected (e.g., "Generic mass-sent template", "Phishing attempt detected", "Low-quality spam offer", "Confirmed scam pattern", "Malicious bot activity"), or an empty string "" if accepted

IMPORTANT CONSTRAINTS:
- Do NOT include markdown formatting, code blocks, or any explanatory text
- Output ONLY the raw JSON object
- When in doubt, err on the side of accepting (false positives hurt legitimate users and business opportunities)
- Focus on clear, unambiguous spam indicators rather than subjective quality judgments
- Prioritize catching high-value opportunities over blocking every unsolicited offer`,
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
			: {
					isRejected: false,
					reason: '',
				};
	}

	// Ensure the reason field exists and is a string
	if (typeof parsed.reason !== 'string') {
		parsed.reason = '';
	}

	return parsed;
}
