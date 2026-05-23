'use client';

import {
	Box,
	Image as ChakraImage,
	HStack,
	Span,
	Text,
	VStack,
} from '@chakra-ui/react';
import { SiLuau, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';
import { LuCircleSlash } from 'react-icons/lu';
import FlyAndRace from '../../public/logos/FlyAndRace.jpg';
import Isonet from '../../public/logos/Isonet.ico';
import Turbotastico from '../../public/logos/Turbotastico.png';
import swissFlagIcon from '../../public/switzerland.svg';

function TechnologyEntry({
	icon,
	name,
	color,
}: {
	icon: ReactNode;
	name: string;
	color?: string;
}) {
	return (
		<Box display={'flex'} flexDir={'row'} alignItems={'center'} gap={2}>
			<ChakraImage
				color={color || 'AccentColor'}
				h={'20px'}
				w={'20px'}
				objectFit={'contain'}
				asChild
			>
				{icon}
			</ChakraImage>
			<Text>{name}</Text>
		</Box>
	);
}

function CompanyEntry({
	icon,
	name,
	role,
	from,
	until,
}: {
	icon: StaticImport;
	name: string;
	role: string;
	from: string;
	until: string;
}) {
	return (
		<Box display={'flex'} flexDir={'row'} alignItems={'start'} gap={2}>
			<ChakraImage
				asChild
				display={'flex'}
				alignItems={'center'}
				justifyItems={'center'}
				borderRadius={'sm'}
				overflow={'hidden'}
				mt={1}
				h={'20px'}
				w={'20px'}
				objectFit={'contain'}
			>
				<Image src={icon} alt={name + ' Logo'} height={20} width={20} />
			</ChakraImage>
			<VStack gap={0} alignItems={'start'}>
				<Box
					alignContent={'center'}
					display={'flex'}
					gap={1}
					flexDir={{ base: 'column', sm: 'row' }}
				>
					<Text>{name}</Text>
					<Text color={'fg.muted'}>
						{from} - {until}
					</Text>
				</Box>
				<Text fontSize={'sm'} color={'fg.muted'}>
					{role}
				</Text>
			</VStack>
		</Box>
	);
}

export default function Home() {
	return (
		<Box>
			<Box height={'175px'} />
			<Box
				display={'flex'}
				flexDir={{ base: 'column', lg: 'row' }}
				gap={{ base: 20, lg: 0 }}
			>
				<Box w={{ base: '100%', lg: '50%' }}>
					<Box
						justifyContent={{ base: 'center', sm: 'start' }}
						width={'full'}
						display={'flex'}
					>
						<Box
							width={{ sm: '100px', base: '70%' }}
							height={'5px'}
							bg={'fg'}
							mb={5}
						/>
					</Box>
					<Text
						fontSize={{ sm: '5xl', base: '3xl' }}
						lineHeight={1.2}
						textAlign={{ base: 'center', sm: 'left' }}
						width={'full'}
					>
						<Span>
							Hi, I&apos;m <Span color={'primary'}>Joshua</Span>,
							<br /> a <Span color="primary">Software</Span> Engineer.
						</Span>
					</Text>

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
						<Text>Based in Zürich, Switzerland</Text>
					</HStack>
				</Box>
				<Box
					w={{ base: '100%', lg: '50%' }}
					display={'flex'}
					flexDir={{ base: 'column', sm: 'row' }}
					justifyContent={'center'}
				>
					<Box
						display={'flex'}
						justifyItems={'center'}
						flexDir={'column'}
						gap={2.5}
						w={{ sm: '40%', base: '100%' }}
						bg={'bg.subtle'}
						border={'1px solid'}
						borderColor={'border'}
						p={3}
						borderRadius={'md'}
						borderRightRadius={{ base: 'md', sm: '0' }}
						borderBottomRadius={{ sm: 'md', base: '0' }}
					>
						<Text mb={1}>Technologies</Text>
						<TechnologyEntry color="#0A80C5" name="React" icon={<SiReact />} />
						<TechnologyEntry
							name="Typescript"
							color="#0987D0"
							icon={<SiTypescript />}
						/>
						<TechnologyEntry
							name="C#"
							color="#0987D0"
							icon={<LuCircleSlash />}
						/>
						<TechnologyEntry name="LuaU" color="#0BA8F4" icon={<SiLuau />} />
					</Box>
					<Box
						display={'flex'}
						justifyItems={'center'}
						flexDir={'column'}
						gap={1}
						w={{ base: '100%', sm: '60%' }}
						bg={'bg.subtle'}
						border={'1px solid'}
						borderLeft={{ sm: '0px' }}
						borderTop={{ smDown: '0' }}
						borderColor={'border'}
						p={3}
						borderRadius={'md'}
						borderLeftRadius={{ sm: 0 }}
						borderTopRadius={{ sm: 'md', base: '0' }}
					>
						<Text mb={1}>Companies</Text>
						<CompanyEntry
							name="Isonet"
							icon={Isonet}
							role="Junior Web Developer"
							from="2025"
							until="Present"
						/>
						<CompanyEntry
							name="Turbotastico"
							icon={Turbotastico}
							role="Lead Software Engineer"
							from="2025"
							until="Present"
						/>
						<CompanyEntry
							name="Fly and Race"
							icon={FlyAndRace}
							role="Executive Assistant"
							from="2023"
							until="2025"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
