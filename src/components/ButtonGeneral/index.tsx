import { Button, Link, Text } from '@chakra-ui/react';

export default function ButtonGeneral(props: {
	text: string;
	size: string | string[];
	bgColor?: string;
	data?: any;
}) {
	function handleclick() {}
	return (
		<Button
			maxW='420px'
			bg={props.bgColor ? props.bgColor : 'brand.verde.500'}
			p={['12px 20px', '12px 20px', '24px 28px']}
			borderRadius={'4px'}
			fontWeight={'bold'}
			color={'brand.branco'}
			w={['240px', '240px', '240px', '100%']}
			textAlign='center'
			shadow={'lg'}
			cursor={'pointer'}
			transition={'all .3s ease'}
			_hover={{
				bg: props.bgColor ? 'brand.dourado.300' : 'brand.verde.primary',
			}}>
			<Link
				href={props.data}
				_hover={{ textDecor: 'none' }}>
				<Text fontSize={props.size}>{props.text}</Text>
			</Link>
		</Button>
	);
}
