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
			p='0px 20px'
			m={['0px 20px', '0px 20px', '0px 20px', '0px auto']}
			justify={'center'}>
			<Heading
				color={HeadingColor}
				textAlign='left'
				fontSize={['2xl', '2xl', '3xl', '4xl']}
				fontFamily={'Montserrat'}>
				Temos a solução que você está procurando
			</Heading>
			<SolutionsSlider />
		</Flex>
	);
}
