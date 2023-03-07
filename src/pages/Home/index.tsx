import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import wppImage from '../../assets/institucional-imgs/wpp.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import  RatingsSection from '../../components/Ratings';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SectionForm from '../../components/SectionForm';
import SliderPromo from '../../components/SliderPromo/Slider';
import Solutions from '../../components/Solutions';
import WhoSection from '../../components/Who';
import { DataNavigation, GeneralData } from '../../mocks/data';

export function Home() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');

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
				<Image
					w={['52px', '52px', '60px', '60px']}
					src={wppImage}
				/>
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
