'use client';

import { AbsoluteCenter, Text, VStack } from '@chakra-ui/react';
import { ConstructionIcon } from 'lucide-react';

export function Maintenance() {
	return (
		<AbsoluteCenter>
			<VStack>
				<ConstructionIcon size={'128'} />
				<Text fontSize={'3xl'} fontWeight={'bold'}>
					Maintenance
				</Text>
				<Text fontSize={'lg'}>
					The website is currently updating and will be back available in a few
					seconds
				</Text>
			</VStack>
		</AbsoluteCenter>
	);
}
