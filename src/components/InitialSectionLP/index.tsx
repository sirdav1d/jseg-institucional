import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { AnimateText, MotionHeading, MotionText } from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';
import { motion } from 'framer-motion';

export default function InitalSectionLP(props: {
	headLine: string;
	subHeadLine: string;
}) {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			id='Home'
			m='120px auto 0px'
			flexDir={'column'}
			maxW='840px'
			gap='20px'
			justify={'center'}
			align={['center', 'center', 'center', 'start']}
			textAlign={'left'}
			w={['100%', '90%', '80%', '50%']}>
			<Heading
				as={motion.h1}
				m='0px 20px'
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				color={HeadingColor}
				fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
				fontFamily={'Montserrat'}>
				{props.headLine}
			</Heading>
			<MotionText
				m='0px 20px'
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				fontSize={['sm', 'md', 'lg', 'lg', 'lg']}>
				{props.subHeadLine}
			</MotionText>
			<Box m='0px auto'>
				<ButtonGeneral
					size={['md', 'lg', 'xl']}
					data={
						'https://api.whatsapp.com/send?phone=5521999624160&text=Ol%C3%A1%20vim%20pela%20Landing%20Page%20e%20gostaria%20de%20montar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar?'
					}
					bgColor={'brand.dourado.500'}
					text='Falar com Consultor'
				/>
			</Box>
		</Flex>
	);
}
