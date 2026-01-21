import { Link, Box, Grid, Text, HStack, VStack } from '@chakra-ui/react';
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons';
import { MoveUpRightIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { LuMail } from 'react-icons/lu';
import { SiLinkedin } from 'react-icons/si';

function SocialLink({
	href,
	text,
	icon,
}: {
	href: string;
	text: string;
	icon: ReactNode;
}) {
	return (
		<Link href={href} gap={2} display={'flex'}>
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
				gap={1}
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
				<MoveUpRightIcon width={'15px'} />
			</HStack>
		</Link>
	);
}

export default function Footer() {
	return (
		<Box width={'full'} height={30}>
			<Box
				className="separator"
				width={'100dvw'}
				position={'absolute'}
				left={0}
				height={'1px'}
				bg={'border'}
			/>
			<Grid templateColumns="repeat(3, 1fr)" gap="6" pt={'15px'} pb={'55px'}>
				<Box h="20" gap={1} display={'flex'} flexDir={'column'}>
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
						href="mailto:joshua@hyper-tech.ch"
						text="joshua@hyper-tech.ch"
						icon={<LuMail />}
					/>
				</Box>
				<Box h="20" gap={1} textAlign={'center'}>
					<Text color={'fg'}>All rights reserved.</Text>
					<Text color={'fg'}>Made with ❤️ in NextJS</Text>
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
					h="20"
					textAlign={'right'}
					display={'flex'}
					justifyContent={'right'}
					flexDir={'column'}
				>
					<Text>This website is open source.</Text>
					<Text>You can view the source code</Text>
					<Text>on the public GitHub repository,</Text>
					<Text>which is linked on my Account.</Text>
				</Box>
			</Grid>
		</Box>
	);
}
