import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { GeneralData } from '../../mocks/data';
import { AnimateText, MotionFlex, MotionHeading } from '../../Styles/animation';
import CardItem from '../Card';

export default function SectionBenefit(props: { data?: any }) {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			flexDir={'column'}
			id='benefits'>
			<MotionHeading
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				color={HeadingColor}
				fontSize={['2xl', '2xl', '3xl', '4xl']}
				textAlign={['left', 'left', 'left', 'center']}
				m={['0px 40px', '0px 20px', '0px 20px', '0px']}
				fontFamily={'Montserrat'}>
				Por que escolher nossa empresa?
			</MotionHeading>
			<Flex
				bgColor={bgColor}
				m={['16px', '16px', '16px', '20px', '16px 80px']}
				p='20px'
				gap='40px'
				justify={['center', 'center', 'center', 'space-between']}
				align={['center', 'center', 'center', 'start']}
				borderRadius={'4px'}
				flexWrap={['wrap', 'wrap', 'wrap','wrap', 'nowrap']}
				shadow='md'
				flexDir={['column', 'column', 'row']}>
				{props.data.map((b: any) => {
					return (
						<MotionFlex
							key={b.title}
							m='0 auto'
							variants={AnimateText}
							initial={'start'}
							whileInView={'end'}
							viewport={{ once: true, amount: 0.3 }}>
							<CardItem data={b} />
						</MotionFlex>
					);
				})}
			</Flex>
		</Flex>
	);
}
