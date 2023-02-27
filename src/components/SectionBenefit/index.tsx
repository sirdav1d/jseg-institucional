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

	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.700');
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
				m={['20px', '20px', '20px', '20px 100px', '20px 160px', '20px 260px']}
				p='20px'
				gap='40px'
				borderRadius={'20px'}
				shadow='2xl'
				flexDir={'column'}>
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
