import { Button, Link, Text } from '@chakra-ui/react';

export default function ButtonGeneral(props: { text: string }) {
	return (
		<Button
			bg={'brand.verde.500'}
			p='12px'
			w='max-content'
			borderRadius={'4px'}
			fontWeight={'semibold'}
			fontSize={'xl'}
			color={'brand.branco'}
			textAlign='center'
			shadow={'lg'}
			cursor={'pointer'}
			transition={'all .3s ease'}
			_hover={{ bg: 'brand.verde.primary' }}>
			<Link _hover={{ textDecor: 'none' }}>
				<Text>{props.text}</Text>
			</Link>
		</Button>
	);
}
