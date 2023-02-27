import { Box, Button, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function ButtonHeader() {
	return (
		<Box
			bg={'brand.verde.700'}
			p='12px'
			borderRadius={'4px'}
			fontWeight={'semibold'}
			fontSize={['small']}
			color={'brand.branco'}
			textAlign='center'
			cursor={'pointer'}
			transition={'all .3s ease'}
			_hover={{ bg: 'brand.verde.primary' }}>
			<Link _hover={{ textDecor: 'none' }}>
				<Text>(21) 97160-2106</Text>

				<Text>Entrar em contato!</Text>
			</Link>
		</Box>
	);
}
