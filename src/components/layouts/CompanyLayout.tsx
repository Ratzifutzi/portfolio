import { CompanyEntry } from '@/config/Companies';
import { Box, Card } from '@chakra-ui/react';
import Image from 'next/image';

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
						{company.role}
					</Card.Body>
				</Card.Root>
			</Box>
			{children}
		</Box>
	);
}
