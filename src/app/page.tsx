'use client';

import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import swissFlagIcon from '../../public/switzerland.svg';

export default function Home() {
	return (
		<>
			<Spacer height={'175px'} />
			<Box width={'100px'} height={'5px'} bg={'fg'} mb={5} />
			<VStack
				w={'max'}
				fontSize={'5xl'}
				lineHeight={1}
				textAlign={'left'}
				align={'start'}
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

			<HStack mt={5} fontSize={'2xl'}>
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
