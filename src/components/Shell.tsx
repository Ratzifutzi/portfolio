'use client';

import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import Header from './partials/Header';
import { usePathname } from 'next/navigation';

export function Shell({ children }: { children: ReactNode }) {
	useEffect(() => {
		console.log('Path changed');
	}, [usePathname()]);

	return (
		<Box
			height={'dvh'}
			mx="auto"
			as={'main'}
			w={'full'}
			pt={1}
			maxW={{
				base: '100%',
				sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1100px',
			}}
			px={{ base: 4, sm: 6, md: 8 }}
			pb={{ base: 10, md: 16 }}
		>
			<Header />
			{children}
		</Box>
	);
}
