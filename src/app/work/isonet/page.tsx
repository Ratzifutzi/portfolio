import CompanyLayout from '@/components/layouts/CompanyLayout';
import { GetCompanyByName } from '@/config/Companies';
import { Text } from '@chakra-ui/react';

export default function Isonet() {
	return (
		<CompanyLayout company={GetCompanyByName('Isonet')}>
			<Text>Hi</Text>
		</CompanyLayout>
	);
}
