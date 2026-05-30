import { CompanyEntry } from '@/config/Companies';
import { Badge, Box, Card, HStack, Link, Text } from '@chakra-ui/react';
import { SiRoblox } from '@icons-pack/react-simple-icons';
import { UserIcon } from 'lucide-react';
import Image from 'next/image';
import { LuGlobe } from 'react-icons/lu';

export default function CompanyLayout({
	company,
	children,
}: Readonly<{
	company: CompanyEntry;
	children: React.ReactNode;
}>) {
	return (
		<Box w={'full'} h={'full'} className="company-layout">
			<Box
				display={'flex'}
				justifyContent={'center'}
				w={'full'}
				className="company-card-wrapper"
			>
				<Card.Root
					textAlign={'center'}
					alignItems={'center'}
					w={{ base: '100%', lg: '500px' }}
					maxW={'500px'}
				>
					<Card.Header display={'flex'} alignItems={'center'} gap={5}>
						<Box asChild borderRadius={'lg'} h={32} w={32}>
							<Image src={company.icon} alt={company.name + ' Logo'} />
						</Box>
						<Card.Title fontSize={'4xl'}>{company.name}</Card.Title>
					</Card.Header>
					<Card.Body pt={2} color={'fg.muted'}>
						{company.description && (
							<Text textAlign={'center'}>{company.description}</Text>
						)}
						{company.socials && (
							<HStack justifyContent={'center'}>
								{company.socials.website && (
									<Link
										href={company.socials.website}
										target="_blank"
										borderBottom={'1px solid'}
										color={'primary'}
										fontSize={'sm'}
									>
										<LuGlobe />
										Website
									</Link>
								)}
								{company.socials.roblox && (
									<Link
										href={company.socials.roblox}
										target="_blank"
										borderBottom={'1px solid'}
										color={'primary'}
										fontSize={'sm'}
									>
										<SiRoblox size={16} />
										Roblox
									</Link>
								)}
							</HStack>
						)}
						<HStack justify={'center'} mt={3}>
							<UserIcon />
							<Text>
								{company.role}{' '}
								{company.until === 'Present' && (
									<Badge colorPalette={'green'}>Current Position</Badge>
								)}
							</Text>
						</HStack>
					</Card.Body>
				</Card.Root>
			</Box>
			{children}
		</Box>
	);
}
