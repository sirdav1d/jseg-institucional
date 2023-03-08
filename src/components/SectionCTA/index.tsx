import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { AnimateCTA, AnimateText, MotionFlex } from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';

export default function SectionCTA(props: { text: string; btnText: string }) {
	const bgColor = useColorModeValue(
		'linear-gradient(90.29deg, #E8BC6C 0%, rgba(244, 224, 186, 0.711631) 99.98%, rgba(255, 255, 255, 0.460417) 99.99%);',
		'linear-gradient(90.29deg, #02110C 46.56%, rgba(16, 139, 74, 0.29) 99.14%)',
	);
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<MotionFlex
			variants={AnimateCTA}
			initial={'start'}
			whileInView={'end'}
			viewport={{ once: true, amount: 0.5 }}
			justify={'center'}
			align='center'
			shadow='2xl'
			padding={['20px', '20px', '20px', '40px']}
			flexDir={['column', 'column', 'row']}
			textAlign='left'
			justifyContent={'space-around'}
			gap='20px'
			background={bgColor}>
			<Heading
				color={HeadingColor}
				w={['100%', '100 % ', '100%', '60%']}
				fontFamily={'Montserrat'}
				fontSize={['xl', '2xl', 'xl', '3xl']}>
				{props.text}
			</Heading>
			<ButtonGeneral
				text={props.btnText}
				size={['lg', 'lg', 'xl', '2xl']}
				data='https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
			/>
		</MotionFlex>
	);
}
