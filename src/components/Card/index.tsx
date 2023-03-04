import {
	Flex,
	Heading,
	Image,
	ResponsiveValue,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

interface CardProps {
	img: string;
	title: string;
	content: string;
	direction: ResponsiveValue<any> | undefined;
}

export default function CardItem(props: { data: CardProps }) {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			justify={'start'}
			flexDir={['column', 'column']}
			align='start'
			w='280px'
			h='100%'
			gap={['8px', '8px', '12px']}>
			<Image
				w='100%'
				h='100%'
				objectFit='contain'
				src={props.data.img}
			/>
			<Flex
				flexWrap='wrap'
				flexDir={'column'}>
				<Heading
					color={HeadingColor}
					fontSize={'xl'}
					mb='8px'>
					{props.data.title}
				</Heading>
				<Text
					display={[
						'inline-block',
						'inline-block',
						'inline-block',
						'none',
						'inline-block',
					]}
					fontSize={'sm'}>
					{props.data.content}
				</Text>
			</Flex>
		</Flex>
	);
}
