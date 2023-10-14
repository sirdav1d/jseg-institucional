import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1solar from '/assets/solar-imgs/beneficios/b1.svg';
import b2solar from '/assets/solar-imgs/beneficios/b2.svg';
import b3solar from '/assets/solar-imgs/beneficios/b3.svg';
import b4solar from '/assets/solar-imgs/beneficios/b4.svg';
import p1solar from '/assets/solar-imgs/produtos/p1.svg';
import p2solar from '/assets/solar-imgs/produtos/p2.svg';
import p3solar from '/assets/solar-imgs/produtos/p3.svg';
import wppImage from '/assets/institucional-imgs/logo_whatsapp.webp';

export default function Solar() {
	const bgColor = useColorModeValue('brand.cinza.100', 'brand.cinza.900');
	const DataNavigationLP = {
		items: [
			{
				link: '#Home',
				navItem: 'Home',
			},
			{
				link: '#benefits',
				navItem: 'Benefícios',
			},
			,
			{
				link: '#findUs',
				navItem: 'Nos Encontre',
			},
			{
				link: '/',
				navItem: 'Institucional',
			},
		],
	};

	const GeneralData = {
		solar: {
			produtos: [
				{
					img: p1solar,
					title: 'Painéis solares fotovoltaicos',
					content:
						'Oferecemos uma linha de painéis solares fotovoltaicos projetados para gerar energia elétrica a partir da luz solar. Eles são compatíveis com sistemas de energia solar residencial e comercial e estão disponíveis em várias potências e tamanhos.',
				},
				{
					img: p2solar,
					title: 'Controlador de carga solar',
					content:
						'Temos um controlador de carga solar que regula a carga e descarga da bateria em um sistema de energia solar. Ele pode ser usado para controlar sistemas de iluminação e fornecer energia elétrica para dispositivos eletrônicos em áreas remotas.',
				},
				{
					img: p3solar,
					title: 'Inversores solares',
					content:
						'Fornecemos uma linha de inversores solares projetados para converter a energia DC gerada pelos painéis solares em energia AC utilizável em sistemas elétricos residenciais e comerciais. Eles estão disponíveis em diferentes tamanhos e potências para atender às necessidades de diferentes sistemas de energia solar.',
				},
			],
			beneficios: [
				{
					img: b1solar,
					title: 'Economia de custos',
					content:
						'Uma vez instalado, o sistema de energia solar converte a luz solar em eletricidade gratuita, o que pode reduzir significativamente sua dependência de energia elétrica da rede pública.',
				},
				{
					img: b2solar,
					title: 'Fonte de energia limpa',
					content:
						'A energia solar é uma fonte de energia limpa e renovável que não emite gases poluentes ou emissões de carbono. Ela ajuda a reduzir a dependência de combustíveis fósseis, que emitem dióxido de carbono, metano e outros gases que contribuem para as mudanças climáticas.',
				},
				{
					img: b3solar,
					title: 'Baixa manutenção',
					content:
						'As placas solares podem durar de 25 a 30 anos e requerem pouca ou nenhuma manutenção. Os custos de manutenção são geralmente mínimos, o que significa que a energia solar pode oferecer economia de custos a longo prazo.',
				},
				{
					img: b4solar,
					title: 'Flexibilidade de instalação',
					content:
						'Os sistemas de energia solar podem ser instalados em uma ampla variedade de locais, desde telhados de casas e edifícios comerciais até em áreas remotas sem acesso à rede elétrica pública.',
				},
			],
		},
	};

	return (
		<>
			<Header data={DataNavigationLP.items} />
			<Box
				pos='fixed'
				transition={'all .3s ease'}
				cursor={'pointer'}
				bottom='20px'
				opacity={0.8}
				zIndex={99999}
				_hover={{ opacity: 1 }}
				left={['0px', '8px', '8px', '20px']}>
				<Link href='https://api.whatsapp.com/send?phone=5521999624160&text=Ol%C3%A1%20vim%20pela%20Landing%20Page%20e%20gostaria%20de%20montar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar?'>
					<Image
						w={['52px', '52px', '60px', '60px']}
						src={wppImage}
						alt='logo whatsapp'
					/>
				</Link>
			</Box>

			<Flex
				overflowX={'hidden'}
				gap={['40px', '60px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<InitalSectionLP
					headLine={'Conheça nossas soluções de Energia Solar'}
					subHeadLine={
						'Aproveite a oportunidade de reduzir sua conta de energia e contribuir para um futuro mais sustentável.'
					}
				/>
				<SliderProducts data={GeneralData.solar.produtos} />
				<SectionBenefit data={GeneralData.solar.beneficios} />
				<SectionCTA
					text={
						'Procurando uma empresa parceira e de confiança?' +
						' Clique aqui e faça seu orçamento'
					}
					btnText={'Orçamento Rápido'}
				/>
				<FindUs />
				<Footer />
			</Flex>
		</>
	);
}
