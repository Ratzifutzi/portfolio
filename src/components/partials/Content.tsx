'use client';

import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const fadeSlide = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function Content({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<Box key={pathname} animation={`${fadeSlide} 0.4s ease-out`}>
			{children}
		</Box>
	);
}
