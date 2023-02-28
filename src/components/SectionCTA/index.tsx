import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ButtonGeneral from '../ButtonGeneral';

export default function SectionCTA(props: { text: string; btnText: string }) {
	const bgColor = useColorModeValue(
		'linear-gradient(90.29deg, #E8BC6C 0%, rgba(244, 224, 186, 0.711631) 99.98%, rgba(255, 255, 255, 0.460417) 99.99%);',
		'linear-gradient(90.29deg, #02110C 46.56%, rgba(16, 139, 74, 0.29) 99.14%)',
	);

	return (
		<Flex
			justify={'center'}
			align='center'
			shadow='2xl'
			padding={'40px'}
			flexDir={['column', 'column', 'row']}
			textAlign='center'
			justifyContent={'space-around'}
			gap='40px'
			background={bgColor}>
			<Heading
				w='70%'
				fontFamily={'Montserrat'}
				fontSize={['lg', 'lg', 'xl', '4xl']}>
				{props.text}
			</Heading>
			<ButtonGeneral
				text={props.btnText}
				size={['lg', 'lg', 'xl', '2xl']}
			/>
		</Flex>
	);
}
