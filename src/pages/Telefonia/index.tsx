import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1tel from '/assets/telefonia-imgs/beneficios/mulheres_atendendo_telefone.webp';
import b2tel from '/assets/telefonia-imgs/beneficios/mao_em_telefone.webp';
import b3tel from '/assets/telefonia-imgs/beneficios/escritorio.webp';
import b4tel from '/assets/telefonia-imgs/beneficios/tablet_com_grafico.webp';
import p1tel from '/assets/telefonia-imgs/produtos/sistema_telefonia_intelbras.webp';
import p2tel from '/assets/telefonia-imgs/produtos/telefone_pleno_intelbras.webp';
import p3tel from '/assets/telefonia-imgs/produtos/central_telefonia_intelbras.webp';
import wppImage from '/assets/institucional-imgs/logo_whatsapp.webp';

export default function Telefonia() {
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
		tel: {
			produtos: [
				{
					img: p1tel,
					title: 'Telefone sem fio Intelbras TS 5120',
					content:
						'Este telefone sem fio é ideal para quem precisa de maior alcance, já que possui tecnologia DECT 6.0, que oferece maior qualidade de sinal e alcance de até 300 metros sem obstáculos. Possui identificador de chamadas, viva-voz e display iluminado.',
				},
				{
					img: p2tel,
					title: 'Telefone com fio Intelbras Pleno',
					content:
						'Este telefone com fio é ideal para quem busca economia e praticidade, já que é um dos telefones com fio mais acessíveis do mercado. Possui teclado luminoso, ajuste de volume da campainha e viva-voz.',
				},
				{
					img: p3tel,
					title: 'Kit PABX Intelbras Impacta 68',
					content:
						'Este sistema de PABX é ideal para empresas de pequeno e médio porte, já que possui capacidade para até 68 ramais e 30 linhas. Possui recursos avançados como identificador de chamadas, gravação de chamadas e atendimento automático.',
				},
			],
			beneficios: [
				{
					img: b1tel,
					title: 'Qualidade de áudio',
					content:
						'Somos conhecidos por fornecer produtos de alta qualidade de áudio, o que significa que você terá conversas telefônicas mais claras e nítidas.',
				},
				{
					img: b2tel,
					title: 'Durabilidade',
					content:
						'Os produtos da Intelbras são feitos com materiais de alta qualidade, o que significa que eles são duráveis ​​e resistentes a danos.',
				},
				{
					img: b3tel,
					title: 'Variedade de produtos',
					content:
						'Trabalhamos com uma ampla variedade de produtos de telefonia, incluindo telefones sem fio, telefones com fio, sistemas de PABX, entre outros, o que significa que você pode encontrar o produto certo para suas necessidades.',
				},
				{
					img: b4tel,
					title: 'Recursos avançados',
					content:
						'Ofertamos uma variedade de recursos avançados em seus produtos de telefonia, como identificador de chamadas, gravação de chamadas e transferência de chamadas, o que significa que você pode ter acesso a recursos avançados de telefonia.',
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
					headLine={'Conheça nossas soluções para Sistemas de Telefonia'}
					subHeadLine={
						'Entre em contato conosco agora para obter mais informações e descobrir como podemos melhorar a comunicação em sua empresa ou residência'
					}
				/>
				<SliderProducts data={GeneralData.tel.produtos} />
				<SectionBenefit data={GeneralData.tel.beneficios} />
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
