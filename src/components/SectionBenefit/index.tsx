import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { GeneralData } from '../../mocks/data';
import CardItem from '../Card';

export default function SectionBenefit() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			flexDir={'column'}
			id='benefits'>
			<Heading
				color={HeadingColor}
				fontSize={['2xl', '2xl', '3xl', '4xl']}
				textAlign={'center'}
				fontFamily={'Montserrat'}>
				Por que escolher nossa empresa?
			</Heading>
			<Flex
				bgColor={bgColor}
				m={['16px', '16px', '16px', '20px', '16px 80px']}
				p='20px'
				gap='40px'
				justify={['center', 'center', 'center', 'space-between']}
				align={['center', 'center', 'center', 'start']}
				borderRadius={'4px'}
				flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
				shadow='md'
				flexDir={['column', 'column', 'row']}>
				{GeneralData.institucional.beneficios.map((b) => {
					return (
						<CardItem
							key={b.title}
							data={b}
						/>
					);
				})}
			</Flex>
		</Flex>
	);
}
