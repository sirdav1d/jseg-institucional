import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import promo1 from '../../assets/institucional-imgs/promo/promo1.svg';

export default function SliderPromo() {
	return (
		<Flex>
			<Image src={promo1} />
		</Flex>
	);
}
