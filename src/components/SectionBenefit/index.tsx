import { Card, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GeneralData } from '../../mocks/data';
import imgteste from '../../assets/institucional-imgs/promo/teste.svg';
import CardItem from '../Card';

export default function SectionBenefit() {
	const [data, setData] = useState({
		img: '',
		title: '',
		content: '',
	});

	const bgColor = useColorModeValue('brand.branco', '#111');
	return (
		<Flex
			flexDir={'column'}
			id='benefits'>
			<Heading
				fontSize={['2xl', '2xl', '3xl', '4xl']}
				textAlign={'center'}
				fontFamily={'Montserrat'}>
				Por que escolher nossa empresa?
			</Heading>
			<Flex
				bgColor={bgColor}
				m={['20px', '20px', '20px', '20px', '20px 40px']}
				p='20px'
				gap='40px'
				justify={['center', 'center', 'center', 'space-between']}
				align='center'
				borderRadius={'4px'}
				flexWrap='wrap'
				shadow='2xl'
				flexDir={['column', 'column', 'row', 'row']}>
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
