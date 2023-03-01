import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

export default function Solutions() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			flexDir={'column'}
			align='center'
			justify={'center'}
			gap='24px'>
			<Heading
				color={HeadingColor}
				fontFamily={'Montserrat'}>
				Temos a solução que você está procurando
			</Heading>
		</Flex>
	);
}
