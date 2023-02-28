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
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.700');
	return (
		<>
			<Flex
				id='who'
				flexDir={'column'}>
				<Flex
					w={['100%', '100%', '100%', '800px']}
					m='20px auto 0px'
					borderRadius={'4px'}
					shadow='lg'
					align={'center'}
					justify='center'
					p='20px'
					flexDir={['column', 'column', 'column', 'row']}
					gap={['12px', '12px', '12px', '40px']}>
					<Flex
						justify={'center'}
						flexDir={'column'}
						gap={['16px', '16px', '16px', '40px']}>
						<Heading
							fontSize={'3xl'}
							fontFamily={'Montserrat'}>
							Quem Somos
						</Heading>
						<Text fontSize={'lg'}>
							Nós somos uma empresa de tecnologia empenhada em oferecer soluções
							eficientes e inovadoras em rede e segurança para empresas e
							residências. Com nossa expertise de 7 anos no mercado, temos o
							conhecimento necessário para atender a qualquer desafio de
							segurança que nossos clientes possam enfrentar.
						</Text>
					</Flex>
					<Image
						w={['100%', '100%', '100%', '320px']}
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
						shadow={'lg'}
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading>Missão</Heading>
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
						shadow={'lg'}
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading>Visão</Heading>
						<Image src={vision} />
						<Text fontSize={'sm'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</Text>
					</Flex>
					<Flex
						m='0px 0px 16px'
						borderRadius='4px'
						shadow={'lg'}
						p='0px 20px 20px'
						justify={'center'}
						align='center'
						w='368px'
						flexDir={'column'}>
						<Heading>Valores</Heading>
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
