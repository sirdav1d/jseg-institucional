import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1cftv from '/assets/cftv-imgs/beneficios/b1.svg';
import b2cftv from '/assets/cftv-imgs/beneficios/b2.svg';
import b3cftv from '/assets/cftv-imgs/beneficios/b3.svg';
import b4cftv from '/assets/cftv-imgs/beneficios/b4.svg';
import p1cftv from '/assets/cftv-imgs/produtos/p1.svg';
import p2cftv from '/assets/cftv-imgs/produtos/p2.svg';
import p3cftv from '/assets/cftv-imgs/produtos/p3.svg';
import wppImage from '/assets/institucional-imgs/wpp.svg';

export default function Cftv() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
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
		cftv: {
			produtos: [
				{
					img: p1cftv,
					title: 'Kit CFTV Coaxial',
					content:
						'Um kit CFTV coaxial é composto por um DVR (gravador de vídeo digital) e 4 câmeras de segurança com tecnologia coaxial. O DVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, esse tipo de kit é ideal para monitorar ambientes de médio porte, como residências e pequenas empresas, com um sistema de segurança simples e eficiente.',
				},
				{
					img: p2cftv,
					title: 'Kit CFTV IP POE',
					content:
						'Um kit CFTV IP PoE é composto por um NVR (gravador de vídeo em rede) e 4 câmeras de segurança com tecnologia IP, que se conectam à rede por meio de cabos Ethernet e utilizam a tecnologia PoE (Power over Ethernet) para alimentação. O NVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, permitindo o acesso às gravações a qualquer momento.',
				},

				{
					img: p3cftv,
					title: 'Kit CFTV IP WIFI',
					content:
						'Um kit CFTV IP Wi-Fi é composto por um NVR (gravador de vídeo em rede) e 4 câmeras de segurança com tecnologia IP, que se conectam à rede sem fio por meio de Wi-Fi. O NVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, permitindo o acesso às gravações a qualquer momento. Esse tipo de kit oferece flexibilidade e facilidade na instalação.',
				},
			],
			beneficios: [
				{
					img: b1cftv,
					title: 'Maior segurança',
					content:
						'Com câmeras posicionadas estrategicamente, é possível monitorar o ambiente em tempo real, o que ajuda a inibir a ação de criminosos e a detectar possíveis invasões ou roubos.',
				},
				{
					img: b2cftv,
					title: 'Acesso remoto',
					content:
						'Muitos kits de CFTV permitem o acesso remoto às imagens capturadas pelas câmeras, o que significa que você pode monitorar sua casa ou empresa de qualquer lugar do mundo, através do seu smartphone ou computador.',
				},
				{
					img: b3cftv,
					title: 'Redução de custos',
					content:
						'Com o kit de CFTV, você pode economizar dinheiro em segurança, pois não será necessário contratar vigilantes ou serviços de monitoramento remoto.',
				},
				{
					img: b4cftv,
					title: 'Monitoramento 24 horas',
					content:
						'Com as câmeras de segurança instaladas, é possível monitorar o local 24 horas por dia, 7 dias por semana, o que aumenta a proteção da sua casa ou empresa durante o dia e à noite.',
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
				<Link href='https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'>
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
					headLine={'Aproveite nossas soluções em CFTV!'}
					subHeadLine={
						'Monitore sua casa ou empresa de onde estiver, com imagens de alta qualidade e tecnologia de ponta. Não perca mais tempo, clique agora no botão abaixo e garanta a sua tranquilidade!'
					}
				/>
				<SliderProducts data={GeneralData.cftv.produtos} />
				<SectionBenefit data={GeneralData.cftv.beneficios} />
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
