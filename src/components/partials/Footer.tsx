import { Box, HStack, Link, Text, useToken, VStack } from '@chakra-ui/react';
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons';
import { HeartIcon, InfoIcon, MoveUpRightIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { LuMail } from 'react-icons/lu';
import { SiLinkedin } from 'react-icons/si';
import { Tooltip } from '../ui/tooltip';

function SocialLink({
	href,
	text,
	icon,
	tooltip,
}: {
	href?: string;
	text: string;
	icon: ReactNode;
	tooltip?: string | ReactNode;
}) {
	return (
		<Link href={href} gap={2} display={'flex'} width={'fit-content'}>
			<Box
				height={'20px'}
				width={'20px'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{icon}
			</Box>
			<HStack
				gap={'5px'}
				_hover={{ color: 'primary' }}
				transition={'color 0.1s ease'}
			>
				<Text
					fontWeight={400}
					textDecoration={'underline'}
					textUnderlineOffset={3}
				>
					{text}
				</Text>
				{href && <MoveUpRightIcon width={'15px'} />}

				{tooltip && (
					<Tooltip content={tooltip}>
						<Box color={'orange'} asChild>
							<InfoIcon size={'15px'} />
						</Box>
					</Tooltip>
				)}
			</HStack>
		</Link>
	);
}

export default function Footer() {
	const [primaryColor] = useToken('colors', ['primary']);

	return (
		<Box width={'full'} height={30} mt={5}>
			<Box
				className="separator"
				width={'100dvw'}
				position={'absolute'}
				left={0}
				height={'1px'}
				bg={'border'}
			/>
			<Box
				pt="15px"
				pb="24px"
				flexDir={{
					base: 'column',
					md: 'row',
				}}
				gap={{
					base: '30px',
					md: 0,
				}}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box
					gap={1}
					display={'flex'}
					flexDir={'column'}
					flexGrow={1}
					order={1}
					className="Social Links"
				>
					<SocialLink
						href="https://github.com/Ratzifutzi/"
						text="@Ratzifutzi"
						icon={<SiGithub />}
					/>
					<SocialLink
						href="https://www.linkedin.com/in/jo-sc/"
						text="Joshua Schmidt"
						icon={<SiLinkedin />}
					/>
					<SocialLink
						href="https://discordapp.com/users/508557236415627264/"
						text="@Ratzifutzi"
						icon={<SiDiscord />}
					/>
					<SocialLink
						href="mailto:contact@hyper-tech.ch"
						text="contact@hyper-tech.ch"
						tooltip={
							<span>
								Please use the contact form if you want to reach me. Only send
								me direct E-Mails if you have any data retention and/or privacy
								concerns. <br />
								<br />
								<strong>
									I will never open any attachments, not on the contact form nor
									in direct E-Mails.
								</strong>
							</span>
						}
						icon={<LuMail />}
					/>
				</Box>

				<Box
					gap={1}
					textAlign={'center'}
					flexGrow={1}
					className="CopyrightNotice"
					order={{
						base: 3,
						md: 2,
					}}
				>
					<Text
						color={'fg'}
						display={'flex'}
						flexDir={'row'}
						justifyContent={'center'}
						gap={1.5}
					>
						Made with
						{<HeartIcon style={{ color: primaryColor, fill: primaryColor }} />}
						in NextJS
					</Text>
					<Text fontSize={'sm'} color={'fg.muted'}>
						Made by a human for other humans.
					</Text>
					<br />
					<VStack gap={0} fontSize={'x-small'}>
						<Text color={'fg.subtle'} fontWeight={300}>
							© 2026, Joshua Schmidt
						</Text>
						<Text color={'fg.subtle'} fontWeight={300}>
							All rights reserved.
						</Text>
					</VStack>
				</Box>

				<Box
					className="OSInfo"
					textAlign={{
						base: 'center',
						md: 'right',
					}}
					order={{
						base: 2,
						md: 3,
					}}
					display={'flex'}
					justifyContent={'right'}
					flexDir={'column'}
					flexGrow={1}
				>
					<Text>Legitimate Domain Aliases:</Text>
					<Text color={'fg.muted'}>www.josc.me</Text>
					<Text color={'fg.muted'}>www.joshua-schmidt.com</Text>
					<Text color={'fg.muted'}>www.joshua-schmidt.ch</Text>
					<Text color={'fg.muted'}>www.joshuaschmidt.ch</Text>
				</Box>
			</Box>
		</Box>
	);
}
