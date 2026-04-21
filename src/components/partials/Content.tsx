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
		<Box
			className="content"
			key={pathname}
			animation={`${fadeSlide} 0.4s ease-out`}
			h={'calc(100% - 90px)'}
			minH={'calc(100% - 90px)'}
			w="full"
			display="block"
		>
			{children}
		</Box>
	);
}
