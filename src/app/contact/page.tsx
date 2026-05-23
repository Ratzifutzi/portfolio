'use client';

import { toaster } from '@/components/ui/toaster';
import { ContactFormInterface } from '@/interfaces/forms/ContactFormInterface';
import {
	Alert,
	Box,
	Button,
	Card,
	Checkbox,
	Field,
	FieldRequiredIndicator,
	Flex,
	HStack,
	Input,
	Stack,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import PrivateCaptcha from '@private-captcha/private-captcha-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
	const [captchaPassed, setCaptchaPassed] = useState(false);
	const [submittingForm, setSubmittingForm] = useState(false);

	const captchaSolution = useRef<string | null>(null);
	const [captchaKey, setCaptchaKey] = useState(0);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ContactFormInterface>();

	const reloadCaptcha = () => {
		captchaSolution.current = null;
		setCaptchaPassed(false);
		setCaptchaKey((prev) => prev + 1);
	};

	const onSubmit = handleSubmit(async (data) => {
		const promise = new Promise(async (resolve, reject) => {
			setSubmittingForm(true);

			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				const result = await response.json();

				if (!response.ok || !result.success) {
					if (result.message) {
						reject(result.message);
					} else {
						reject('Internal Server Error');
					}
				}

				resolve('Message sent!');
			} finally {
				// Reset Captcha
				setValue('captchaSolution', '');
				setCaptchaPassed(false);
				reloadCaptcha();

				setSubmittingForm(false);
			}
		});

		toaster.promise(promise, {
			loading: {
				title: 'Sending message...',
			},
			success: {
				title: 'Message sent!',
			},
			error: (err) => ({
				duration: 60_000,
				title: 'Message not sent',
				description: typeof err === 'string' ? err : 'Something went wrong',
				closable: true,
			}),
		});
	});

	const handleCaptchaFinished = (detail: {
		widget: { solution: () => string };
		element: HTMLElement;
	}) => {
		captchaSolution.current = detail.widget.solution();
		setCaptchaPassed(true);
		setValue('captchaSolution', captchaSolution.current, {
			shouldValidate: true,
		});
		console.log('Captcha solved!', captchaSolution.current);
	};

	return (
		<Flex
			flexGrow={1}
			width={'full'}
			justifyContent={'center'}
			alignItems={{ base: 'start', lg: 'center' }}
		>
			<Card.Root mt={{ base: '15px', lg: '0' }} w={'full'} maxW={'600px'}>
				<Card.Header textAlign={{ base: 'center', lg: 'left' }}>
					<Card.Title>Write me a message!</Card.Title>
					<Card.Description>
						Fill out this form to directly reach me. I will get back to you via
						E-Mail
					</Card.Description>
				</Card.Header>
				<form onSubmit={onSubmit}>
					<Card.Body>
						<Alert.Root mb={5} colorPalette={'orange'}>
							<Alert.Indicator />
							<Alert.Content>
								<Alert.Title>Work in progress</Alert.Title>
								<Alert.Description>
									This form is not implemented yet. All responses will not be
									saved nor recorded.
								</Alert.Description>
							</Alert.Content>
						</Alert.Root>
						<Stack gap="4" w="full">
							<HStack>
								<Field.Root
									required
									invalid={!!errors.firstName}
									disabled={submittingForm}
								>
									<Field.Label>
										First Name <FieldRequiredIndicator />
									</Field.Label>
									<Input {...register('firstName')} />
									<Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
								</Field.Root>

								<Field.Root
									invalid={!!errors.lastName}
									disabled={submittingForm}
								>
									<Field.Label>Last Name</Field.Label>
									<Input {...register('lastName')} />
									<Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
								</Field.Root>
							</HStack>

							<Field.Root
								required
								invalid={!!errors.contactMail}
								disabled={submittingForm}
							>
								<Field.Label>
									Contact E-Mail <FieldRequiredIndicator />
								</Field.Label>
								<Input
									{...register('contactMail', {
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address format',
										},
									})}
								/>
								<Field.ErrorText>{errors.contactMail?.message}</Field.ErrorText>
							</Field.Root>

							<Field.Root
								required
								invalid={!!errors.message}
								disabled={submittingForm}
							>
								<Field.Label>
									Message <FieldRequiredIndicator />
								</Field.Label>
								<Textarea
									minH={'85px'}
									maxH={'300px'}
									{...register('message', {
										minLength: {
											value: 50,
											message: 'Please write at least 50 characters.',
										},
									})}
								/>
								<Field.ErrorText>{errors.message?.message}</Field.ErrorText>
							</Field.Root>

							<Checkbox.Root
								required
								disabled={submittingForm}
								invalid={!!errors.privacyPolicy}
							>
								<Checkbox.HiddenInput
									{...register('privacyPolicy', {
										required: 'You must accept the Privacy Policy',
									})}
								/>

								<Checkbox.Control />
								<Checkbox.Label flexDirection={'row'} display={'flex'} gap={1}>
									I have read and I agree with the
									<Link href={'/privacy'}>
										<Text color={'primary'} textDecor={'underline'}>
											Privacy Policy
										</Text>
									</Link>
								</Checkbox.Label>
							</Checkbox.Root>

							{process.env.NEXT_PUBLIC_REQUIRE_CAPTCHA && (
								<Box
									display={'flex'}
									justifyContent={'center'}
									mt={5}
									minH={'100px'}
								>
									<PrivateCaptcha
										key={captchaKey}
										siteKey={process.env.NEXT_PUBLIC_PRIVATE_CAPTCHA_SITEKEY}
										theme="dark"
										onFinish={handleCaptchaFinished}
									/>
								</Box>
							)}
						</Stack>
					</Card.Body>
					<Card.Footer justifyContent={{ base: 'center' }}>
						<VStack>
							<Button
								disabled={!captchaPassed}
								loading={submittingForm}
								variant="solid"
								type="submit"
							>
								Send message
							</Button>
							<Text
								fontSize={'x-small'}
								color={'fg.error'}
								opacity={
									(captchaPassed ?? process.env.NEXT_PUBLIC_REQUIRE_CAPTCHA)
										? 0
										: 1
								}
							>
								Please complete the Captcha before submitting.
							</Text>
						</VStack>
					</Card.Footer>
				</form>
			</Card.Root>
		</Flex>
	);
}
