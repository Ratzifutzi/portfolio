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
	},
	{
		name: 'TurboTastico',
		role: 'Lead Software Engineer',
		icon: TurboTasticoIcon,
		from: new Date('2025'),
		until: 'Present',
	},
	{
		name: 'Fly & Race',
		role: 'Executive Assistant',
		icon: FlyAndRaceIcon,
		from: new Date('2024'),
		until: new Date('2025'),
		path: '/work/flyandrace',
	},
	{
		name: 'Fly & Race',
		role: 'Flight Simulator Instructor',
		icon: FlyAndRaceIcon,
		from: new Date('2023'),
		until: new Date('2024'),
		path: '/work/flyandrace',
	},
];

export default COMPANIES;
