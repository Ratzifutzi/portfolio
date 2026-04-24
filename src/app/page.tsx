'use client';

import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import swissFlagIcon from '../../public/switzerland.svg';

export default function Home() {
	return (
		<>
			<Spacer height={'175px'} />
			<Box
				justifyContent={{ base: 'center', sm: 'start' }}
				width={'full'}
				display={'flex'}
			>
				<Box
					width={{ sm: '100px', base: '50%' }}
					height={'5px'}
					bg={'fg'}
					mb={5}
				/>
			</Box>
			<VStack
				w={'max'}
				fontSize={{ sm: '5xl', base: '3xl' }}
				lineHeight={1}
				textAlign={{ base: 'center', sm: 'left' }}
				align={{ base: 'center', sm: 'start' }}
				width={'full'}
				gap={0}
			>
				<HStack>
					<Text>Hi, I&apos;m</Text>
					<HStack gap={0}>
						<Text color={'primary'}>Joshua</Text>
						<Text>, a</Text>
					</HStack>
				</HStack>
				<HStack>
					<Text color={'primary'}>Software</Text>
					<Text>Engineer.</Text>
				</HStack>
			</VStack>

			<HStack
				mt={{ base: 3, sm: 5 }}
				fontSize={{ base: 'md', sm: '2xl' }}
				textAlign={{ base: 'center', sm: 'left' }}
				justifyContent={{ base: 'center', sm: 'start' }}
				width={'full'}
			>
				<Box height={'25px'} overflow={'hidden'} borderRadius={'sm'}>
					<Image
						src={swissFlagIcon}
						alt="Flag of Switzerland"
						priority
						height={25}
					/>
				</Box>
				<Text>Based in</Text>
				<Text>Zürich, Switzerland</Text>
			</HStack>
		</>
	);
}
