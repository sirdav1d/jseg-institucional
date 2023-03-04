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
import {
	AnimateText,
	MotionFlex,
	MotionHeading,
	MotionImage,
} from '../../Styles/animation';
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
				<MotionHeading
					variants={AnimateText}
					initial={'start'}
					whileInView={'end'}
					viewport={{ once: true, amount: 0.5 }}
					color={HeadingColor}
					textAlign={'left'}
					m='0px 40px'
					fontFamily={'Montserrat'}>
					O que dizem sobre nossos serviços?
				</MotionHeading>
				<Flex
					shadow='md'
					padding={'20px'}
					gap={['40px', '40px', '80px', '0px']}
					flexDir={['column', 'column', 'column', 'row']}
					justify={'space-between'}
					m={['0px 20px', '0px 40px']}
					align='center'>
					<MotionFlex
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.2 }}
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
					</MotionFlex>
					<MotionFlex
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.5 }}
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
					</MotionFlex>
					<MotionFlex
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.8 }}
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
					</MotionFlex>
				</Flex>
			</Flex>
			<Divider />
			<Flex
				flexDir={'column'}
				m={['20px ', '20px ', '20px ', '0px auto']}
				gap='20px'
				maxW='1024px'>
				<MotionHeading
					variants={AnimateText}
					initial={'start'}
					whileInView={'end'}
					viewport={{ once: true, amount: 0.5 }}
					color={HeadingColor}
					textAlign={'left'}
					fontSize={['2xl', '2xl', '3xl', '4xl']}
					fontFamily={'Montserrat'}>
					Conheça nossos principais parceiros
				</MotionHeading>
				<Flex
					flexDir={'column'}
					align={'center'}>
					<Flex
						justify={['center', 'center', 'center', 'space-between']}
						align='center'
						flexWrap={'wrap'}
						gap='20px'
						flexDir={'row'}>
						<MotionImage
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.1 }}
							src={c1}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.2 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c2}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.3 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%' }}
							src={c3}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.4 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c4}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.5 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c5}
						/>

						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.6 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c6}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.6 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c7}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.6 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c8}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.7 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
							src={c9}
						/>
						<MotionImage
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.7 }}
							transform={'auto'}
							filter={'auto'}
							saturate={'0%'}
							_hover={{ saturate: '100%', transition: 'all .3s ease' }}
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
