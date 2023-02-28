import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ButtonGeneral from '../ButtonGeneral';
import Form from '../Form';

export default function SectionForm() {
	const textColor = useColorModeValue('brand.preto', 'brand.branco');
	return (
		<Flex
			m={['20px 40px', '20px 40px', '20px 40px', '20px 80px']}
			gap='28px'
			flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
			color={textColor}>
			<Flex
				mt={['40px', '0px', '0px', '80px']}
				flexDir={'column'}
				gap='20px'
				align={['center', 'center', 'center', 'start']}
				textAlign={['center', 'center', 'center', 'left']}
				w={['100%', '100%', '100%', '60%']}>
				<Heading
					fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']}
					fontFamily={'Montserrat'}>
					Seu parceiro Intelbras no centro de Niterói
				</Heading>
				<Text fontSize={['sm', 'md', 'lg', 'lg', '2xl']}>
					Oferecemos os melhores equipamentos de rede e segurança com a
					qualidade e confiabilidade da Intelbras, no coração de Niterói
				</Text>
				<ButtonGeneral
					size={['lg', 'lg', 'xl', '2xl']}
					text='Falar com Consultor'
				/>
			</Flex>
			<Flex
				w={['100%', '100%', '100%', '100%', '40%']}
				justify={'center'}
				align='center'>
				<Form />
			</Flex>
		</Flex>
	);
}
