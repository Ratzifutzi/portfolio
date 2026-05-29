import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import FlyAndRaceIcon from '../../public/logos/FlyAndRace.jpg';
import IsonetIcon from '../../public/logos/Isonet.ico';
import TurboTasticoIcon from '../../public/logos/Turbotastico.png';

export interface CompanyEntry {
	name: string;
	role: string;
	icon: StaticImport;
	from: Date;
	until: Date | 'Present';
	path?: string;
}

const COMPANIES: CompanyEntry[] = [
	{
		name: 'Isonet',
		role: 'Web Developer',
		icon: IsonetIcon,
		from: new Date('2025'),
		until: 'Present',
		path: '/work/isonet',
	},
	{
		name: 'TurboTastico',
		role: 'Lead Software Engineer',
		icon: TurboTasticoIcon,
		from: new Date('2025'),
		until: 'Present',
		path: '/work/turbotastico',
	},
	{
		name: 'Fly & Race',
		role: 'Executive Assistant',
		icon: FlyAndRaceIcon,
		from: new Date('2023'),
		until: new Date('2025'),
		path: '/work/flyandrace',
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
