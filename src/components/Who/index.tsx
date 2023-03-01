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
					w={['100%', '360px', '100%', '800px']}
					m={['20px', '20px', '20px', '20px auto 0px']}
					borderRadius={'4px'}
					shadow='md'
					align={'center'}
					justify='center'
					p='20px'
					flexDir={['column', 'column', 'row']}
					gap={['12px', '12px', '12px', '40px']}>
					<Flex
						justify={'center'}
						flexDir={'column'}
						gap={['8px', '8px', '16px', '40px']}>
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
					w={['100%', '100%', '100%', '800px']}
					justify={'space-between'}
					align='center'
					gap='20px'
					flexDir={['column', 'column', 'row']}
					m='20px auto'>
					<Flex
						borderRadius='4px'
						m='0px 0px 16px'
						p='0px 20px 20px'
						shadow={'md'}
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Missão
						</Heading>
						<Image src={mission} />
						<Text fontSize={'sm'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Flex>
					<Flex
						m='0px 0px 16px'
						borderRadius='4px'
						p='0px 20px 20px'
						shadow={'md'}
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Visão
						</Heading>
						<Image src={vision} />
						<Text fontSize={'sm'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Flex>
					<Flex
						m='0px 0px 16px'
						borderRadius='4px'
						shadow={'md'}
						p='0px 20px 20px'
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading
							color={HeadingColor}
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Valores
						</Heading>
						<Image src={value} />
						<Text fontSize={'sm'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
