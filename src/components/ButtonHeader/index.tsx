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
				href='https://api.whatsapp.com/send?phone=5521999624160&text=Ol%C3%A1%20te%20encontrei%20no%20site%20institucional%20da%20JSEG.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento,%20pode%20me%20ajudar?'
				_hover={{ textDecor: 'none' }}>
				<Text>(21) 99962-4160</Text>

				<Text>Entrar em contato!</Text>
			</Link>
		</Box>
	);
}
