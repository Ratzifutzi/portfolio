'use client';

import { Box, Button, Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { LucideArrowRight } from 'lucide-react';

export default function Header() {
	const pathname = usePathname();
	const path = pathname.replaceAll('/', '');

	return (
		<>
			<Box
				width={'100%'}
				height={'50px'}
				display={'flex'}
				flexDir={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<HStack
					height={'100%'}
					flexDirection={'row'}
					display={'flex'}
					alignItems={'center'}
				>
					<Link href={'/'}>
						<HStack gap={0}>
							<Text fontSize={'lg'} fontWeight={500}>
								josc
							</Text>
							<Text fontSize={'lg'} fontWeight={'black'} color={'primary'}>
								.
							</Text>
							<Text fontSize={'lg'} fontWeight={500}>
								me
							</Text>
							<Text fontSize={'lg'} fontWeight={400} color={'primary'}>
								/
							</Text>
							<Text
								fontSize={'lg'}
								fontWeight={500}
								display={{
									sm: 'flex',
									base: 'none',
								}}
								color={'primary'}
							>
								{path}
							</Text>
						</HStack>
					</Link>
				</HStack>

				<HStack
					gap={{
						base: 2,
						sm: 3,
						lg: 5,
					}}
				>
					<NavLink href="/">Home</NavLink>
					<NavLink href="/work">Work</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/contact">
						<Button size={'xs'} bg={'primary'}>
							Contact
							<LucideArrowRight />
						</Button>
					</NavLink>
				</HStack>
			</Box>
			<Box
				className="separator"
				width={'100dvw'}
				position={'absolute'}
				left={0}
				height={'1px'}
				bg={'border.muted'}
			></Box>
			<Box className="spacer" mb={2} />
		</>
	);
}
