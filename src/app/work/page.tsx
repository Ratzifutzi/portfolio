'use client';

import { DevelopmentGuard } from '@/components/guards/DevGuard';
import { Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<DevelopmentGuard>
			<Text fontWeight={500}>Sphinx of black quartz, judge my vow. #2</Text>
		</DevelopmentGuard>
	);
}
