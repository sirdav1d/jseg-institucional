import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RatingsSection from '../../components/RatingsSection';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SectionForm from '../../components/SectionForm';
import SliderPromo from '../../components/SliderPromo/Slider';
import Solutions from '../../components/Solutions';
import WhoSection from '../../components/Who';
import b1Inst from '/assets/institucional-imgs/benefits/b1.svg';
import b2Inst from '/assets/institucional-imgs/benefits/b2.svg';
import b3Inst from '/assets/institucional-imgs/benefits/b3.svg';
import b4Inst from '/assets/institucional-imgs/benefits/b4.svg';
import wppImage from '/assets/institucional-imgs/wpp.svg';

export function Home() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
	const DataNavigation = {
		items: [
			{
				link: '#home',
				navItem: 'Home',
			},
			{
				link: '#benefits',
				navItem: 'Benefícios',
			},
			,
			{
				link: '#solutions',
				navItem: 'Soluções',
			},
			,
			{
				link: '#who',
				navItem: 'Quem Somos',
			},
			,
			{
				link: '#findUs',
				navItem: 'Nos Encontre',
			},
		],
	};

	const GeneralData = {
		institucional: {
			beneficios: [
				{
					img: b1Inst,
					title: 'Soluções escaláveis',
					content:
						'Oferecemos soluções escaláveis que crescem com sua empresa, sem comprometer a qualidade ou a segurança.',
					direction: 'row',
				},
				{
					img: b2Inst,
					title: 'Logística eficiente',
					content:
						'Com nossa logística eficiente, entregamos seus equipamentos rapidamente e garantimos que eles cheguem em perfeitas condições',
					direction: 'row-reverse',
				},
				{
					img: b3Inst,
					title: 'Parceria estratégica',
					content:
						'Somos parceiros estratégicos de sua empresa, oferecendo soluções personalizadas e suporte técnico para garantir que sua rede e segurança estejam em pleno funcionamento',
					direction: 'row',
				},
				{
					img: b4Inst,
					title: 'Preço justo',
					content:
						'Oferecemos preços justos e competitivos, para que sua empresa possa obter as soluções necessárias sem ultrapassar seu orçamento.',
					direction: 'row-reverse',
				},
			],
		},
	};

	return (
		<>
			<Header data={DataNavigation.items} />
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
				gap={['40px', '60px', '60px', '80px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<Box mt={['60px', '60px', '20px', '80px']}>
					<SliderPromo />
				</Box>
				<SectionForm />
				<SectionBenefit data={GeneralData.institucional.beneficios} />
				<SectionCTA
					text={
						'Procurando uma empresa parceira e de confiança?' +
						' Clique aqui e faça seu orçamento'
					}
					btnText={'Fazer orçamento'}
				/>
				<Solutions />
				<WhoSection />
				<RatingsSection />
				<FindUs />
				<Footer />
			</Flex>
		</>
	);
}

export default Home;
