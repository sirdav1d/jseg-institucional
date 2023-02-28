import { Flex, Heading, Text, Image, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import r1 from '../../assets/institucional-imgs/ratings/img1.svg';
import r2 from '../../assets/institucional-imgs/ratings/img2.svg';
import r3 from '../../assets/institucional-imgs/ratings/img3.svg';
import c1 from '../../assets/institucional-imgs/ratings/clients/c1.svg';
import c2 from '../../assets/institucional-imgs/ratings/clients/c2.svg';
import c3 from '../../assets/institucional-imgs/ratings/clients/c3.svg';
import c4 from '../../assets/institucional-imgs/ratings/clients/c4.svg';
import c5 from '../../assets/institucional-imgs/ratings/clients/c5.svg';
import c6 from '../../assets/institucional-imgs/ratings/clients/c6.svg';
import c7 from '../../assets/institucional-imgs/ratings/clients/c7.svg';
import c8 from '../../assets/institucional-imgs/ratings/clients/c8.svg';
import c9 from '../../assets/institucional-imgs/ratings/clients/c9.svg';
import c10 from '../../assets/institucional-imgs/ratings/clients/c10.svg';
import SectionCTA from '../SectionCTA';

export default function RatingsSection() {
	return (
		<>
			<Flex
				flexDir={'column'}
				gap='40px'
				textAlign={'center'}
				m='0px 80px'>
				<Heading
					textAlign={'center'}
					fontFamily={'Montserrat'}>
					O que dizem sobre nossos serviços?
				</Heading>
				<Flex gap='40px'>
					<Flex
						gap='20px'
						flexDir={'column'}>
						<Text
							fontSize={'xl'}
							fontStyle='italic'>
							“Pessoal com conhecimento técnico do produto e atendimento muito
							bom.”
						</Text>
						<Flex
							gap='40px'
							justify={'center'}
							align='center'>
							<Image src={r1} />
							<Text fontWeight={'bold'}>Bruno Lima</Text>
						</Flex>
					</Flex>
					<Flex
						gap='20px'
						flexDir={'column'}>
						<Text
							fontSize={'xl'}
							fontStyle='italic'>
							“Atendentes NOTA 1000. Orientação precisa. Preço adequado. Virei
							fã”
						</Text>
						<Flex
							gap='40px'
							justify={'center'}
							align='center'>
							<Image src={r2} />
							<Text fontWeight={'bold'}>Fidelis Estefan</Text>
						</Flex>
					</Flex>
					<Flex
						gap='20px'
						flexDir={'column'}>
						<Text
							fontSize={'xl'}
							fontStyle='italic'>
							“Tudo ótimo, encontrei o que queria e o atendimento perfeito”
						</Text>
						<Flex
							gap='40px'
							justify={'center'}
							align='center'>
							<Image src={r3} />
							<Text fontWeight={'bold'}>Fernando Rayol</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				flexDir={'column'}
				justify='center'
				gap='20px'
				align={'center'}>
				<Heading
					textAlign={'center'}
					fontFamily={'Montserrat'}>
					Conheça nossos principais parceiros
				</Heading>
				<Flex
					flexDir={'column'}
					align={'center'}
					gap='20px'
					justify='center'>
					<HStack gap='20px'>
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
					</HStack>
					<HStack gap='20px'>
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
					</HStack>
				</Flex>
			</Flex>
			<SectionCTA
				text='Não perca mais tempo, adquira nossos produtos agora mesmo! Clique aqui para comprar!'
				btnText={'Comprar Agora'}
			/>
		</>
	);
}
