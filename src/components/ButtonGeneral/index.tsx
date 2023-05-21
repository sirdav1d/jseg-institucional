import { Button, Link, Text } from '@chakra-ui/react';

export default function ButtonGeneral(props: {
	text: string;
	size: string | string[];
	bgColor?: string;
	data?: any;
}) {
	return (
		<Link
			href={props.data}
			_hover={{ textDecor: 'none' }}>
			<Button
				maxW='420px'
				bg={props.bgColor ? props.bgColor : 'brand.verde.500'}
				p={['16px', '16px', '20px']}
				borderRadius={'4px'}
				fontWeight={'semibold'}
				color={'brand.branco'}
				// w={['240px', '240px', '240px', '100%']}
				textAlign='center'
				shadow={'lg'}
				cursor={'pointer'}
				transition={'all .3s ease'}
				_hover={{
					bg: props.bgColor ? 'brand.dourado.300' : 'brand.verde.primary',
				}}>
				<Text fontSize={props.size}>{props.text}</Text>
			</Button>
		</Link>
	);
}
