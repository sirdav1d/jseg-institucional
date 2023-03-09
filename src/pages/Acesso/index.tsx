import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import wppImage from '../../assets/institucional-imgs/wpp.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import { DataNavigationLP, GeneralData } from '../../mocks/data';

export default function Telefonia() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');

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
					btnText={'Fazer orçamento'}
				/>
				<FindUs />
				<Footer />
			</Flex>
		</>
	);
}
