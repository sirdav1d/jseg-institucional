import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1rede from '/assets/rede-imgs/beneficios/b1.svg';
import b2rede from '/assets/rede-imgs/beneficios/b2.svg';
import b3rede from '/assets/rede-imgs/beneficios/b3.svg';
import b4rede from '/assets/rede-imgs/beneficios/b4.svg';
import p1rede from '/assets/rede-imgs/produtos/p1.svg';
import p2rede from '/assets/rede-imgs/produtos/p2.svg';
import p3rede from '/assets/rede-imgs/produtos/p3.svg';
import wppImage from '/assets/institucional-imgs/wpp.svg';

export default function Rede() {
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
		rede: {
			produtos: [
				{
					img: p1rede,
					title: 'Cabo UTP CAT5E 100% Cobre',
					content:
						'Cabo Cat5e é um tipo de cabo de rede que é usado para conectar dispositivos de rede, como computadores, roteadores e switches, para permitir a transmissão de dados em alta velocidade. O termo "Cat5e" significa "Categoria 5 aprimorada". Ele suporta taxas de transferência de dados de até 1 Gbps em distâncias de até 100 metros, o que o torna ideal para uso em redes domésticas e empresariais.',
				},
				{
					img: p2rede,
					title: 'Cabo UTP CAT6 100% Cobre',
					content:
						'O cabo Cat6 é um tipo de cabo de rede que foi projetado para suportar velocidades de transmissão de dados mais altas do que o cabo Cat5e. Ele é uma evolução do cabo Cat5e, com melhorias em sua estrutura interna que permitem a transmissão de dados em velocidades de até 10 Gbps em distâncias de até 55 metros.',
				},
				{
					img: p3rede,
					title: 'Cabo FTP CAT6 100% Cobre',
					content:
						'cabo FTP Cat6 é mais resistente a ruídos externos e proporciona uma transmissão de dados mais estável e confiável, especialmente em ambientes com muitos dispositivos de rede eletromagnéticos próximos, como equipamentos de energia elétrica ou maquinário industrial.',
				},
			],
			beneficios: [
				{
					img: b1rede,
					title: 'Conexão mais rápida',
					content:
						'Uma boa internet permite que você faça download, upload e streaming de conteúdo mais rapidamente. Isso é especialmente útil quando você precisa enviar grandes arquivos, assistir filmes em alta definição ou jogar jogos online.',
				},
				{
					img: b2rede,
					title: 'Maior produtividade',
					content:
						'Você pode trabalhar de forma mais eficiente e eficaz, especialmente se você trabalha em casa ou em um escritório virtual. Você pode acessar aplicativos de negócios, armazenar arquivos na nuvem e colaborar com colegas de trabalho em tempo real sem interrupções.',
				},
				{
					img: b3rede,
					title: 'Economia de tempo e dinheiro',
					content:
						'Você pode economizar tempo e dinheiro ao fazer compras online, pagar contas e gerenciar suas finanças pessoais. Isso também é útil para quem precisa realizar transações comerciais, como pagamentos e transferências bancárias, sem sair de casa.',
				},
				{
					img: b4rede,
					title: 'Acesso à informação',
					content:
						'Você pode acessar rapidamente informações importantes de fontes confiáveis, como notícias, artigos científicos e documentos de pesquisa. Isso é especialmente útil para estudantes, pesquisadores e profissionais.',
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
					/>
				</Link>
			</Box>

			<Flex
				overflowX={'hidden'}
				gap={['40px', '60px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<InitalSectionLP
					headLine={'Aproveite nossas opções de Cabos de Rede'}
					subHeadLine={
						'Se conecte com amigos e familiares em todo o mundo por meio da conexão segura que uma boa internet oferece.'
					}
				/>
				<SliderProducts data={GeneralData.rede.produtos} />
				<SectionBenefit data={GeneralData.rede.beneficios} />
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
