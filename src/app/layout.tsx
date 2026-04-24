import { Maintenance } from '@/components/Maintenance';
import { Shell } from '@/components/Shell';
import { Provider } from '@/components/ui/provider';
import { Box, Text } from '@chakra-ui/react';
import '@fontsource-variable/lexend';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
	title: 'Joshua Schmidt',
	description: 'My Portfolio Website',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<Script
					strategy="afterInteractive"
					src="https://cdn.privatecaptcha.com/widget/js/privatecaptcha.js"
				/>
				<Provider>
					<Box width={'full'} bg={'orange'} textAlign={'center'}>
						<Text color={'black'} pt={1} pb={1}>
							Website is currently work in progress! Please contact me directly
							for my portfolio and/or any sort of questions!
						</Text>
					</Box>
					{process.env.MAINTENANCE === 'false' ? (
						<Shell>{children}</Shell>
					) : (
						<>
							<Maintenance />
						</>
					)}
				</Provider>
			</body>
		</html>
	);
}
