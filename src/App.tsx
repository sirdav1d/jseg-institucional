import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Header from './components/Header';
import SectionBenefit from './components/SectionBenefit';
import SectionCTA from './components/SectionCTA';
import SectionForm from './components/SectionForm';
import SliderPromo from './components/SliderPromo/Slider';
import Solutions from './components/Solutions';
import promo1 from './assets/institucional-imgs/promo/promo1.svg';
import promo2 from './assets/institucional-imgs/promo/promo2.svg';
import promo3 from './assets/institucional-imgs/promo/promo3.svg';
import WhoSection from './components/Who';
import RatingsSection from './components/ratings';

function App() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
	return (
		<>
			<Header />
			<Flex
				gap={['40px', '60px', '60px', '80px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<Box mt={['40px', '60px', '20px', '80px']}>
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
			</Flex>
		</>
	);
}

export default App;
