import {
	Image,
	Center,
	Divider,
	Flex,
	Heading,
	Text,
	useColorModeValue,
	VStack,
	Link,
} from '@chakra-ui/react';
import background from '../../assets/institucional-imgs/backFooter.svg';
import instaImage from '../../assets/institucional-imgs/insta.svg';
import wppImage from '../../assets/institucional-imgs/wpp.svg';
import faceImage from '../../assets/institucional-imgs/face.svg';

export default function Footer() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<>
			<Flex
				flexDir={'column'}
				bgImage={background}
				bgPos='center'
				bgSize={'cover'}
				bgRepeat={'no-repeat'}>
				<Flex
					pos={'relative'}
					justify='center'
					h='100%'
					pb='20px'
					minH='64vh'>
					<Flex
						align={'start'}
						justify='space-between'
						gap='40px'
						maxW='920px'
						padding={'20px 40px 0px'}
						flexWrap={'wrap'}>
						<VStack
							align={'start'}
							gap='24px'>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									fontFamily={'Montserrat'}
									color={HeadingColor}>
									Home
								</Heading>
								<Text>Carrossel de Promoções</Text>
								<Text>Formulário de contato</Text>
								<Text>Botão para iniciar interação pelo Whatsapp</Text>
							</Flex>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									color={HeadingColor}
									fontFamily={'Montserrat'}>
									Quem Somos
								</Heading>
								<Text>Historicidade e Visão Geral</Text>
								<Text>Missão</Text>
								<Text>Visão</Text>
								<Text>Valores</Text>
							</Flex>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									fontFamily={'Montserrat'}
									color={HeadingColor}>
									Benefícios
								</Heading>
								<Text>Projetos escaláveis</Text>
								<Text>Logística Eficiente</Text>
								<Text>Parceria Estratégica</Text>
								<Text>Preço Justo</Text>
							</Flex>
						</VStack>
						<VStack
							align={'start'}
							gap='24px'>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									color={HeadingColor}
									fontFamily={'Montserrat'}>
									Soluções
								</Heading>
								<Text>Soluções para CFTV</Text>
								<Text>Soluções para Conexão Solar</Text>
								<Text>Soluções para Telefonia</Text>
								<Text>Soluções para Automação Residencial</Text>
								<Text>Soluções para Sistemas de Alarme</Text>
								<Text>Soluções para Rede de Internet</Text>
								<Text>Soluções para Controle de Acesso</Text>
							</Flex>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									color={HeadingColor}
									fontFamily={'Montserrat'}>
									Nos Encontre
								</Heading>
								<Text>Mapa interativo</Text>
								<Text>Benefícios da localidade</Text>
							</Flex>
							<Flex
								fontSize={'sm'}
								flexDir={'column'}
								p='0px 20px 0px 20px'>
								<Heading
									fontSize={'xl'}
									color={HeadingColor}
									fontFamily={'Montserrat'}>
									Entrar em contato
								</Heading>
								<Text>Iniciar interação com equipe de vendas</Text>
							</Flex>
						</VStack>
					</Flex>

					<VStack
						p={'20px'}
						gap='12px'
						pos='absolute'
						right={['0px', '0px', '0px', '40px', '80px']}
						top='0px'>
						<Link>
							<Image
								height={'56px'}
								src={instaImage}
							/>
						</Link>
						<Link>
							<Image
								height={'56px'}
								src={faceImage}
							/>
						</Link>
						<Link>
							<Image
								height={'56px'}
								src={wppImage}
							/>
						</Link>
					</VStack>
				</Flex>
				<Divider />
				<Center
					m='0px 40px'
					p='20px'
					dir='column'
					bottom='0px'>
					<Text
						textAlign={'center'}
						fontSize={['3xs', '2xs', 'xs', 'xs']}
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
		</>
	);
}
