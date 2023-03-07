import { Flex, useColorModeValue } from '@chakra-ui/react';
import { AnimateText, MotionHeading, MotionText } from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';

export default function InitalSectionLP(props: {
	headLine: string;
	subHeadLine: string;
}) {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			m='120px auto 20px'
			flexDir={'column'}
			gap='20px'
			align={['center', 'center', 'center', 'start']}
			textAlign={'left'}
			w={['100%', '100%', '100%', '40%']}>
			<MotionHeading
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
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				fontSize={['sm', 'md', 'lg', 'lg', 'lg']}>
				{props.subHeadLine}
			</MotionText>
			<ButtonGeneral
				size={['lg', 'lg', 'xl']}
				bgColor={'brand.dourado.500'}
				text='Falar com Consultor'
			/>
		</Flex>
	);
}
