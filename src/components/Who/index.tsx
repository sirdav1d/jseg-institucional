import {
	Flex,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import group from '../../assets/institucional-imgs/WhoSection/group.svg';
import mission from '../../assets/institucional-imgs/WhoSection/mission.svg';
import value from '../../assets/institucional-imgs/WhoSection/value.svg';
import vision from '../../assets/institucional-imgs/WhoSection/vision.svg';

export default function WhoSection() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<>
			<Flex
				id='who'
				justify={'center'}
				align='center'
				flexDir={'column'}>
				<Flex
					w={['100%', '360px', '100%', '800px', '1024px']}
					m={['20px', '20px', '20px', '20px auto 0px']}
					borderRadius={'4px'}
					shadow={['none', 'none', 'none', 'md']}
					align={'center'}
					justify='center'
					p='20px'
					flexDir={['column', 'column', 'row']}
					gap={['12px', '12px', '12px', '40px']}>
					<Flex
						justify={'center'}
						flexDir={'column'}
						gap={['8px', '8px', '16px', '20px']}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Quem Somos
						</Heading>
						<Text fontSize={'sm'}>
							Nós somos uma empresa de tecnologia empenhada em oferecer soluções
							eficientes e inovadoras em rede e segurança para empresas e
							residências. Com nossa expertise de 7 anos no mercado, temos o
							conhecimento necessário para atender a qualquer desafio de
							segurança que nossos clientes possam enfrentar.
						</Text>
					</Flex>
					<Image
						w={['100%', '0%', '320px']}
						h='auto'
						src={group}
					/>
				</Flex>
				<Flex
					shadow={['md', 'md', 'md', 'none']}
					w={['100%', '360px', '100%', '800px', '1024px']}
					justify={'space-between'}
					align='center'
					gap={['0px', '0px', '0px', '20px']}
					flexDir={['column', 'column', 'row']}
					m='20px auto'>
					<Flex
						borderRadius='4px'
						m='0px 0px 16px'
						p='0px 20px 20px'
						gap='12px'
						shadow={['', '', '', 'md']}
						justify={'center'}
						align='center'
						w='368px'
						h={['100%', '100%', '100%', '300px']}
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Missão
						</Heading>
						<Image src={mission} />
						<Text fontSize={'sm'}>
							Fornecer Soluções personalizadas de alta qualidade de produtos e
							serviços exclusivos que geram impacto no mercado
						</Text>
					</Flex>
					<Flex
						m='0px 0px 16px'
						borderRadius='4px'
						gap={['0px', '0px', '0px', '20px']}
						p='0px 20px 20px'
						shadow={['', '', '', 'md']}
						justify={'center'}
						align='center'
						w='368px'
						h={['100%', '100%', '100%', '300px']}
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Visão
						</Heading>
						<Image src={vision} />
						<Text fontSize={'sm'}>
							Ser uma empresa reconhecida nacionalmente pela sua qualidade e
							eficiência operacional
						</Text>
					</Flex>
					<Flex
						m='0px 0px 16px'
						borderRadius='4px'
						shadow={['', '', '', 'md']}
						p='0px 20px 20px'
						justify={'center'}
						gap={['0px', '0px', '0px', '20px']}
						align='center'
						textAlign={'left'}
						w='368px'
						h={['100%', '100%', '100%', '300px']}
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Valores
						</Heading>
						<Image src={value} />
						<Flex
							flexDir={'column'}
							gap='8px'>
							<Text fontSize={'sm'}>
								Comprometimento; Eficiência; Comunicação; Ética;
								Autorresponsabilidade
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
