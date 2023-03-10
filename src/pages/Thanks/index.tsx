import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import logo from '../../assets/institucional-imgs/logo.svg';
import bgImage from '../../assets/thanks/bg.svg';
import brinde from '../../assets/thanks/brinde.svg';
import ButtonGeneral from '../../components/ButtonGeneral';
import Switcher from '../../components/Switcher';

export default function Thanks() {
	const bgColor = useColorModeValue('brand.cinza.100', 'brand.cinza.900');
	return (
		<Flex
			overflowX={'hidden'}
			h='100%'
			bgImage={bgImage}
			bgColor={bgColor}
			bgSize='cover'
			bgRepeat={'no-repeat'}
			margin='0px auto'
			gap='40px'
			flexDir={'column'}
			align='center'>
			<Flex
				bgColor={'brand.cinza.100'}
				w='100%'
				shadow={'md'}
				p='24px'
				gap='40px'
				justify={'center'}
				align='center'>
				<Link href='/'>
					<Image
						h={['40px', '40px', '48px', '100%']}
						src={logo}
					/>
				</Link>

				<Switcher />
			</Flex>
			<Flex
				maxW='1024px'
				gap='20px'
				p='24px'
				justify={'center'}>
				<Flex
					justify={'center'}
					flexDir={'column'}
					gap='20px'>
					<Heading
						fontFamily={'Montserrat'}
						fontSize={['xl', '2xl', '2xl', '4xl']}>
						Obrigado pela confiança! Em breve um consultor entrará em contato
					</Heading>
					<Heading
						w='100%'
						fontWeight={['normal', 'normal', 'normal', 'semibold']}
						fontFamily={'Montserrat'}
						fontSize={['sm', 'md', 'lg', 'xl']}>
						Caso precise de um orçamento com urgência, pode entrar em contato no
						botão abaixo
					</Heading>
					<ButtonGeneral
						text={'Falar com Especialista'}
						size={'xl'}
					/>
				</Flex>
				<Image
					display={['none', 'none', 'none', 'block']}
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
					m={['12px', '12px', '12px', '0px auto']}
					gap='12px'
					flexDir={['column', 'column', 'column', 'row']}
					p={['20px', '20px', '20px', '0px 20px 24px']}>
					<Text fontSize={['sm', 'md', 'lg']}>
						Sabemos que o seu tempo é valioso, por isso preparamos uma surpresa
						para você. Baixe agora e descubra nosso brinde exclusivo!
					</Text>
					<Box
						w='400px'
						mb='100px'>
						<ButtonGeneral
							text={'Baixar Agora'}
							size={'xl'}
							bgColor={'brand.dourado.500'}
							data={'./brinde/brinde.jpg'}
						/>
					</Box>
				</Flex>
				<Flex
					flexDir={'column'}
					gap='20px'
					p='20px'>
					<Divider />
					<Center w='100%'>
						<Text
							textAlign={'center'}
							fontSize={['3xs', '3xs', '2xs', 'xs']}
							w={['100%', '100%', '100%', '70%']}>
							Telefone: 021-3628-4723 | E-mail: contato@jsegequipamentos.com.br
							|
							<br />
							JSEG Equipamentos - Dominus Tec Informática Eireli &copy; Todos os
							direitos reservados | CNPJ:08.644.747/0001-94 IE: 78.258.969 | Av.
							Emani do Amaral Peixoto, 436, Stand 08 CEP: 24.020-077 Centro -
							Niterói - RJ
						</Text>
					</Center>
				</Flex>
			</Flex>
		</Flex>
	);
}
