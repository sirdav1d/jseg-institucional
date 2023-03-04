import {
	Divider,
	Flex,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import c1 from '../../assets/institucional-imgs/ratings/clients/c1.svg';
import c10 from '../../assets/institucional-imgs/ratings/clients/c10.svg';
import c2 from '../../assets/institucional-imgs/ratings/clients/c2.svg';
import c3 from '../../assets/institucional-imgs/ratings/clients/c3.svg';
import c4 from '../../assets/institucional-imgs/ratings/clients/c4.svg';
import c5 from '../../assets/institucional-imgs/ratings/clients/c5.svg';
import c6 from '../../assets/institucional-imgs/ratings/clients/c6.svg';
import c7 from '../../assets/institucional-imgs/ratings/clients/c7.svg';
import c8 from '../../assets/institucional-imgs/ratings/clients/c8.svg';
import c9 from '../../assets/institucional-imgs/ratings/clients/c9.svg';
import r1 from '../../assets/institucional-imgs/ratings/img1.svg';
import r2 from '../../assets/institucional-imgs/ratings/img2.svg';
import r3 from '../../assets/institucional-imgs/ratings/img3.svg';
import SectionCTA from '../SectionCTA';

export default function RatingsSection() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<>
			<Flex
				maxWidth={'1100px'}
				flexDir={'column'}
				gap={'20px'}
				textAlign={'center'}
				m='0px auto'>
				<Heading
					color={HeadingColor}
					textAlign={'left'}
					m='0px 40px'
					fontFamily={'Montserrat'}>
					O que dizem sobre nossos serviços?
				</Heading>
				<Flex
					shadow='md'
					padding={'20px'}
					gap={['40px', '40px', '80px', '0px']}
					flexDir={['column', 'column', 'column', 'row']}
					justify={'space-between'}
					m={['0px 20px', '0px 40px']}
					align='center'>
					<Flex
						gap='8px'
						flexDir={'column'}>
						<Text
							fontSize={['md', 'xl', 'xl', ' md']}
							fontStyle='italic'>
							“Pessoal com conhecimento técnico do produto e atendimento muito
							bom.”
						</Text>
						<Flex
							gap='12px'
							justify={'center'}
							align='center'>
							<Image src={r1} />
							<Text
								fontWeight={'bold'}
								color={HeadingColor}>
								Bruno Lima
							</Text>
						</Flex>
					</Flex>
					<Flex
						gap='8px'
						flexDir={'column'}>
						<Text
							fontSize={['md', 'xl', 'xl', ' md']}
							fontStyle='italic'>
							“Atendentes NOTA 1000. Orientação precisa. Preço adequado. Virei
							fã”
						</Text>
						<Flex
							gap='12px'
							justify={'center'}
							align='center'>
							<Image src={r2} />
							<Text
								fontWeight={'bold'}
								color={HeadingColor}>
								Fidelis Estefan
							</Text>
						</Flex>
					</Flex>
					<Flex
						gap='8px'
						flexDir={'column'}>
						<Text
							fontSize={['md', 'xl', 'xl', ' md']}
							fontStyle='italic'>
							“Tudo ótimo, encontrei o que queria e o atendimento perfeito”
						</Text>
						<Flex
							gap='12px'
							justify={'center'}
							align='center'>
							<Image src={r3} />
							<Text
								fontWeight={'bold'}
								color={HeadingColor}>
								Fernando Rayol
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Divider />
			<Flex
				flexDir={'column'}
				m={['20px ', '20px ', '20px ', '0px auto']}
				gap='20px'
				maxW='1024px'>
				<Heading
					color={HeadingColor}
					textAlign={'left'}
					fontSize={['2xl', '2xl', '3xl', '4xl']}
					fontFamily={'Montserrat'}>
					Conheça nossos principais parceiros
				</Heading>
				<Flex
					flexDir={'column'}
					align={'center'}>
					<Flex
						justify={['center', 'center', 'center', 'space-between']}
						align='center'
						flexWrap={'wrap'}
						gap='20px'
						flexDir={'row'}>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							src={c1}
							_hover={{ saturate: '100%' }}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c2}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c3}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c4}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c5}
						/>

						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c6}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c7}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c8}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c9}
						/>
						<Image
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							transition='all .3s ease'
							_hover={{ saturate: '100%' }}
							src={c10}
						/>
					</Flex>
				</Flex>
			</Flex>
			<SectionCTA
				text='Não perca mais tempo, adquira nossos produtos agora mesmo! Clique aqui para comprar!'
				btnText={'Comprar Agora'}
			/>
		</>
	);
}
