import {
	Divider,
	Flex,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { AnimateText, MotionFlex, MotionHeading } from '../../Styles/animation';
import SectionCTA from '../SectionCTA';
import r1 from '/assets/institucional-imgs/ratings/homem_com_filho_testimonial1.webp';
import r2 from '/assets/institucional-imgs/ratings/homem_sorrindo_testimonial2.webp';
import r3 from '/assets/institucional-imgs/ratings/homem_cruzando_bracos_testimonial3.webp';

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
							<Image
								src={r1}
								alt='Avatar Bruno Lima'
							/>
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
							<Image
								src={r2}
								alt='Avatar Fidelis Estefan'
							/>
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
							<Image
								src={r3}
								alt='Avatar Fernando Rayol'
							/>
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
			<SectionCTA
				text={
					'Não perca mais tempo, adquira nossos produtos agora mesmo! Clique aqui para comprar!'
				}
				btnText={'Comprar Agora'}
			/>
		</>
	);
}
