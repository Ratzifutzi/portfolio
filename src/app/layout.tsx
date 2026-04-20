import { Shell } from '@/components/Shell';
import { Provider } from '@/components/ui/provider';
import { Box, Center, HStack, Text } from '@chakra-ui/react';
import '@fontsource-variable/lexend';
import { ConstructionIcon } from 'lucide-react';
import type { Metadata, Viewport } from 'next';
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
			<body>
				<Provider>
					<Box width={'full'} height={'33px'} bg={'orange'}>
						<Center height={'full'}>
							<HStack color={'black'}>
								<ConstructionIcon />
								<Text>
									Website is currently work in progress! Please contact me
									directly for my portfolio and/or any sort of questions!
								</Text>
								<ConstructionIcon />
							</HStack>
						</Center>
					</Box>
					<Shell>{children}</Shell>
				</Provider>
			</body>
		</html>
	);
}
