import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Header from './components/Header';
import SectionBenefit from './components/SectionBenefit';
import SectionForm from './components/SectionForm';
import SliderPromo from './components/SliderPromo/Slider';

function App() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
	return (
		<>
			<Header />
			<Flex
				gap={['40px', '60px', '20px', '80px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<Box mt={['40px', '60px', '20px', '80px']}>
					<SliderPromo />
				</Box>
				<SectionForm />
				<SectionBenefit />
			</Flex>
		</>
	);
}

export default App;
