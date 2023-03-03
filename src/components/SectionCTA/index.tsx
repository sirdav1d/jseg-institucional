import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ButtonGeneral from '../ButtonGeneral';

export default function SectionCTA(props: { text: string; btnText: string }) {
	const bgColor = useColorModeValue(
		'linear-gradient(90.29deg, #E8BC6C 0%, rgba(244, 224, 186, 0.711631) 99.98%, rgba(255, 255, 255, 0.460417) 99.99%);',
		'linear-gradient(90.29deg, #02110C 46.56%, rgba(16, 139, 74, 0.29) 99.14%)',
	);
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
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
			/>
		</Flex>
	);
}
