'use client';

import COMPANIES from '@/config/Companies';
import {
	Box,
	Image as ChakraImage,
	Container,
	HStack,
	Link,
	Span,
	Text,
	VStack,
} from '@chakra-ui/react';
import { SiLuau, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';
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
	path,
}: {
	icon: StaticImport;
	name: string;
	role: string;
	from: string;
	until: string;
	path?: string;
}) {
	return (
		<Link href={path}>
			<Box
				display={'flex'}
				flexDir={'row'}
				alignItems={'start'}
				gap={2}
				cursor={path ? 'pointer' : ''}
			>
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
						{path ? (
							<Text
								textDecor={'underline'}
								color={'primary'}
								textUnderlineOffset={3}
							>
								{name}
							</Text>
						) : (
							<Text>{name}</Text>
						)}
						<Text color={'fg.muted'}>
							{from} - {until}
						</Text>
					</Box>
					<Text fontSize={'sm'} color={'fg.muted'}>
						{role}
					</Text>
				</VStack>
			</Box>
		</Link>
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
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 50"
									width="50px"
									height="50px"
								>
									<path
										fill="currentColor"
										d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"
									/>
								</svg>
							}
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
						{COMPANIES.map((value, index) => {
							return (
								<Container key={index} asChild>
									<CompanyEntry
										name={value.name}
										icon={value.icon}
										role={value.role}
										from={value.from.getFullYear().toString()}
										until={
											value.until === 'Present'
												? 'Present'
												: value.until.getFullYear().toString()
										}
										path={value.path}
									/>
								</Container>
							);
						})}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
