import { AbsoluteCenter, Text, VStack } from '@chakra-ui/react';
import { LuConstruction } from 'react-icons/lu';

export function DevelopmentGuard({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (process.env.NODE_ENV === 'development') {
		return <>{children}</>;
	} else {
		return (
			<AbsoluteCenter>
				<VStack>
					<LuConstruction size={'128'} />
					<Text fontSize={'3xl'} fontWeight={'bold'}>
						Work in progress
					</Text>
					<Text fontSize={'lg'}>
						This content is still work in progress and currently access
						controlled
					</Text>
				</VStack>
			</AbsoluteCenter>
		);
	}
}
