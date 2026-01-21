'use client';

import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './partials/Header';
import Content from './partials/Content';

export function Shell({ children }: { children: ReactNode }) {
	return (
		<Box
			height={'dvh'}
			mx="auto"
			as={'main'}
			w={'full'}
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
			<Content>{children}</Content>
		</Box>
	);
}
