import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1acesso from '/assets/acesso-imgs/beneficios/b1.svg';
import b2acesso from '/assets/acesso-imgs/beneficios/b2.svg';
import b3acesso from '/assets/acesso-imgs/beneficios/b3.svg';
import b4acesso from '/assets/acesso-imgs/beneficios/b4.svg';
import p1acesso from '/assets/acesso-imgs/produtos/p1.svg';
import p2acesso from '/assets/acesso-imgs/produtos/p2.svg';
import p3acesso from '/assets/acesso-imgs/produtos/p3.svg';
import wppImage from '/assets/institucional-imgs/wpp.svg';

export default function Telefonia() {
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
		acesso: {
			produtos: [
				{
					img: p1acesso,
					title: 'Controladora de Acesso SS 420',
					content:
						'O SS 420 é um controlador de acesso stand alone com display touch screen e abertura através de senha, cartão de proximidade e leitor biométrico. Controla até 5.000 usuários e 1.500 biometrias, além de permitir o gerenciamento do controle de acesso através dos navegadores Firefox e Google Chrome.',
				},
				{
					img: p2acesso,
					title: 'Kit Acesso Digiprox SA 203',
					content:
						'O controlador de acesso Digiprox SA 203 é um dispositivo stand alone, com frequência 125 kHz, teclado touch screen e possui abertura por senha ou cartão de proximidade RFID. Os usuários podem ser cadastrados pelos métodos de senha numérica e cartão de proximidade.',
				},
				{
					img: p3acesso,
					title: 'Fechadura eletroímã Kit Elite',
					content:
						'A fechadura-eletroímã Kit Elite da Automatiza é composta por suportes em alumínio de fabricação 100% nacional e fechadura-eletroímã de 150 Kgf, é nossa opção mais versátil e pode ser instalado em portas de madeira, alumínio, aço e divisórias, sendo necessário dupla face em portas de vidro.',
				},
			],
			beneficios: [
				{
					img: b1acesso,
					title: 'Maior segurança',
					content:
						'Os produtos de controle de acesso da Intelbras permitem a criação de regras e restrições de acesso, garantindo maior segurança para as pessoas e para as informações.',
				},
				{
					img: b2acesso,
					title: 'Registro de acesso',
					content:
						'Nossos produtos de controle de acesso registram todas as entradas e saídas, permitindo uma gestão mais eficiente e segura.',
				},
				{
					img: b3acesso,
					title: 'Redução de custos',
					content:
						'Com a automatização do controle de acesso, é possível reduzir custos com pessoal e segurança, além de evitar fraudes e problemas relacionados à segurança.',
				},
				{
					img: b4acesso,
					title: 'Gerenciamento remoto',
					content:
						'É possível gerenciar os produtos de controle de acesso da Intelbras remotamente, por meio de aplicativos e softwares de gerenciamento.',
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
					headLine={
						'Conheça nossas soluções para Sistemas de Controle de Acesso'
					}
					subHeadLine={
						' Entre em contato conosco agora e descubra como podemos proteger sua empresa e aumentar a eficiência com nossas soluções de controle de acesso.'
					}
				/>
				<SliderProducts data={GeneralData.acesso.produtos} />
				<SectionBenefit data={GeneralData.acesso.beneficios} />
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
