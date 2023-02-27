import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ButtonGeneral from '../ButtonGeneral';

export default function SectionForm() {
	const textColor = useColorModeValue('brand.preto', 'brand.branco');
	return (
		<Flex
			m={['0px 40px', '0px 40px', '0px 40px', '0px 80px']}
			gap='28px'
			flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
			color={textColor}>
			<Flex
				mt='80px'
				flexDir={'column'}
				gap='24px'
				align={['center', 'center', 'center', 'start']}
				textAlign={['center', 'center', 'center', 'left']}
				w={['100%', '100%', '100%', '60%']}>
				<Heading
					fontSize={['2xl', '2xl', '3xl', '4xl']}
					fontFamily={'Montserrat'}>
					Seu parceiro Intelbras no centro de Niterói
				</Heading>
				<Text fontSize={['sm', 'md', 'xl']}>
					Oferecemos os melhores equipamentos de rede e segurança com a
					qualidade e confiabilidade da Intelbras, no coração de Niterói
				</Text>
				<ButtonGeneral text='Falar com um Consultor' />
			</Flex>
			<Flex
				w={['100%', '100%', '100%', '40%']}
				justify={'center'}
				align='center'>
				<Box
					backgroundColor={'brand.cinza.500'}
					w='494px'
					h='564px'>
					Formulario em breve
				</Box>
			</Flex>
		</Flex>
	);
}
