import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import SolutionsSlider from '../SolutionSlider';

export default function Solutions() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
		id='solutions'
			shadow={'md'}
			flexDir={'column'}
			maxW='1024px'
			m='0px auto'
			p='20px'
			align='center'
			justify={'center'}>
			<Heading
				color={HeadingColor}
				textAlign='left'
				fontSize={['xl', 'xl', 'xl', '3xl']}
				fontFamily={'Montserrat'}>
				Temos a solução que você está procurando
			</Heading>
			<SolutionsSlider />
		</Flex>
	);
}
