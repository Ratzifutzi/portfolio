import CompanyLayout from '@/components/layouts/CompanyLayout';
import { GetCompanyByName } from '@/config/Companies';
import { Text } from '@chakra-ui/react';

export default function FlyAndRace() {
	return (
		<CompanyLayout company={GetCompanyByName('Fly & Race')}>
			<Text>WIP</Text>
		</CompanyLayout>
	);
}
