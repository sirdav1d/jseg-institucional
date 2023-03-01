import { Box, Flex, useColorModeValue, Image } from '@chakra-ui/react';
import Header from './components/Header';
import RatingsSection from './components/ratings';
import SectionBenefit from './components/SectionBenefit';
import SectionCTA from './components/SectionCTA';
import SectionForm from './components/SectionForm';
import SliderPromo from './components/SliderPromo/Slider';
import Solutions from './components/Solutions';
import WhoSection from './components/Who';
import FindUs from './components/SectionFindUs';
import Footer from './components/Footer';
import wppImage from './assets/institucional-imgs/wpp.svg';

export function App() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');

	return (
		<>
			<Header />
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
					w={['40px', '48px', '60px', '100%']}
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
				<SectionBenefit />
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

export default App;
