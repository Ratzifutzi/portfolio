import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import FlyAndRaceIcon from '../../public/logos/FlyAndRace.jpg';
import IsonetIcon from '../../public/logos/Isonet.png';
import TurboTasticoIcon from '../../public/logos/Turbotastico.png';

export interface CompanyEntry {
	name: string;
	description?: string;
	role: string;
	icon: StaticImport;
	from: Date;
	until: Date | 'Present';
	path?: string;
	socials?: {
		website?: string;
		roblox?: string;
	};
}

const COMPANIES: CompanyEntry[] = [
	{
		name: 'Isonet',
		role: 'Web Developer',
		description: 'Systemic and flexible process digitalization & automation.',
		icon: IsonetIcon,
		from: new Date('2025'),
		until: 'Present',
		path: '/work/isonet',
		socials: {
			website: 'https://isonet.ch/',
		},
	},
	{
		name: 'TurboTastico',
		role: 'Lead Scripter',
		description:
			'Development and Acquisition of Experiences on the Roblox Platform reaching milions of Players.',
		icon: TurboTasticoIcon,
		from: new Date('2025'),
		until: 'Present',
		path: '/work/turbotastico',
		socials: {
			roblox: 'https://www.roblox.com/communities/34141897/TurboTastico',
		},
	},
	{
		name: 'Fly & Race',
		role: 'Executive Assistant',
		description:
			'Creation of immersive flight and racing simulator experiences for corporate and private events.',
		icon: FlyAndRaceIcon,
		from: new Date('2023'),
		until: new Date('2025'),
		path: '/work/flyandrace',
		socials: {
			website: 'https://flyandrace.ch/',
		},
	},
];

export function GetCompanyByName(name: string): CompanyEntry {
	const res = COMPANIES.find((value) => {
		return value.name === name;
	});

	if (!res) {
		throw Error('Company not found.');
	}

	return res;
}

export default COMPANIES;
