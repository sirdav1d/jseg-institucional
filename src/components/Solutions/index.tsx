import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { AnimateContainer, MotionFlex } from '../../Styles/animation';
import SolutionsSlider from '../SolutionSlider';

export default function Solutions() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<MotionFlex
			variants={AnimateContainer}
			initial={'start'}
			whileInView={'end'}
			viewport={{ once: true, amount: 0.1 }}
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
		</MotionFlex>
	);
}
