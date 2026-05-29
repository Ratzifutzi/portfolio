import CompanyLayout from '@/components/layouts/CompanyLayout';
import { GetCompanyByName } from '@/config/Companies';
import { Text } from '@chakra-ui/react';

export default function TurboTastico() {
	return (
		<CompanyLayout company={GetCompanyByName('TurboTastico')}>
			<Text>Hi</Text>
		</CompanyLayout>
	);
}
