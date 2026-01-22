'use client';

import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import Header from './partials/Header';
import Content from './partials/Content';
import Footer from './partials/Footer';
import { Router } from 'next/router';

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
		>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</Box>
	);
}
