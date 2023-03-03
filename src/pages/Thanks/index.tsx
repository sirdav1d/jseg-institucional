import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/institucional-imgs/logo.svg';
import bgImage from '../../assets/thanks/bg.svg';
import brinde from '../../assets/thanks/brinde.svg';
import ButtonGeneral from '../../components/ButtonGeneral';

export default function Thanks() {
	return (
		<Flex
			bgImage={bgImage}
			bgSize='cover'
			bgRepeat={'no-repeat'}
			margin='0px auto'
			minH='110vh'
			gap='40px'
			flexDir={'column'}
			align='center'>
			<Flex
				p='24px'
				justify={'center'}
				align='center'>
				<Image src={logo} />
			</Flex>
			<Flex
				maxW='1024px'
				gap='24px'
				justify={'center'}
				align='center'>
				<Flex
					flexDir={'column'}
					gap='20px'>
					<Heading
						fontFamily={'Montserrat'}
						fontSize={'4xl'}>
						Obrigado pela confiança! Em breve um consultor entrará em contato
					</Heading>
					<Heading
						w='100%'
						fontFamily={'Montserrat'}
						fontSize={'xl'}>
						Caso precise de um orçamento com urgência, pode entrar em contato no
						botão abaixo
					</Heading>
					<ButtonGeneral
						text={'Falar com Especialista'}
						size={'2xl'}
					/>
				</Flex>
				<Image
					height={'240px'}
					borderRadius='20px'
					shadow={'xl'}
					src={brinde}
				/>
			</Flex>
			<Flex
				p={'20px 0px 100px'}
				flexDir={'column'}
				w='100%'>
				<Flex
					maxW='1024px'
					m='0px auto'>
					<Text fontSize={'lg'}>
						Sabemos que o seu tempo é valioso, por isso preparamos uma surpresa
						para você. Baixe agora e descubra nosso brinde exclusivo!
					</Text>
					<Box w='400px'>
						<ButtonGeneral
							text={'Baixar Agora'}
							size={'2xl'}
							bgColor={'brand.dourado.500'}
							data={
								'https://drive.google.com/file/d/1eUMjBeltTCrR9D6Ao8FABc8rNzeC6VpQ/view?usp=sharing'
							}
						/>
					</Box>
				</Flex>
				<Center
					w='100%'
					p='20px'
					pos='absolute'
					bottom='0px'>
					<Text
						textAlign={'center'}
						fontSize={['3xs', '2xs']}
						w={['100%', '100%', '100%', '70%']}>
						Telefone: 021-3628-4723 | E-mail: contato@jsegequipamentos.com.br |
						<br />
						JSEG Equipamentos - Dominus Tec Informática Eireli &copy; Todos os
						direitos reservados | CNPJ:08.644.747/0001-94 IE: 78.258.969 | Av.
						Emani do Amaral Peixoto, 436, Stand 08 CEP: 24.020-077 Centro -
						Niterói - RJ
					</Text>
				</Center>
			</Flex>
		</Flex>
	);
}
