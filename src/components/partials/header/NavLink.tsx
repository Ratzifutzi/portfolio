'use client';

import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type NavLinkProps = {
	href: string;
	children: ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	// Start at 0px, then grow to 4px over 0.3s for the active link
	const thickness = isActive ? '4px' : '0px';

	return (
		<Link href={href}>
			<Text
				as="span"
				textDecoration="underline"
				textUnderlineOffset={5}
				textDecorationColor={isActive ? 'primary' : 'transparent'}
				style={{
					textDecorationThickness: thickness,
					transition:
						'text-decoration-thickness 0.3s ease, text-decoration-color 0.3s ease',
				}}
				onClick={() => {}}
			>
				{children}
			</Text>
		</Link>
	);
}

export default NavLink;
