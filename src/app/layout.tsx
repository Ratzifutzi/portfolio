import { Provider } from '@/components/ui/provider';
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
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
