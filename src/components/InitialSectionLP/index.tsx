import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { AnimateText, MotionHeading, MotionText } from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';

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
			<MotionHeading
				m='0px 20px'
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				color={HeadingColor}
				fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
				fontFamily={'Montserrat'}>
				{props.headLine}
			</MotionHeading>
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
					size={['lg', 'lg', 'xl']}
					data={
						'https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
					}
					bgColor={'brand.dourado.500'}
					text='Falar com Consultor'
				/>
			</Box>
		</Flex>
	);
}
