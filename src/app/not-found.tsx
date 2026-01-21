'use client';

import { AbsoluteCenter, Heading, Text, VStack } from '@chakra-ui/react';

export default function NotFound() {
	return (
		<AbsoluteCenter>
			<VStack>
				<Heading size={'6xl'}>404</Heading>
				<Text>Page not found.</Text>
			</VStack>
		</AbsoluteCenter>
	);
}
