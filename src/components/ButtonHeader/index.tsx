import { Box, Link, Text } from '@chakra-ui/react';

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
			<Link
				href='https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
				_hover={{ textDecor: 'none' }}>
				<Text>(21) 97160-2106</Text>

				<Text>Entrar em contato!</Text>
			</Link>
		</Box>
	);
}
