import { Flex, Heading, Text, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
	img: string;
	title: string;
	content: string;
	direction: ResponsiveValue<any> | undefined;
}

export default function CardItem(props: { data: CardProps }) {
	return (
		<Flex
			justify={'start'}
			flexDir={['column', 'column']}
			align='start'
			w='280px'
			height={'340px'}
			gap={['8px', '8px', '24px']}>
			<Image
				w='280px'
				h='140px'
				objectFit='cover'
				src={props.data.img}
			/>
			<Flex
				flexWrap='wrap'
				flexDir={'column'}>
				<Heading
					fontSize={'xl'}
					mb='8px'>
					{props.data.title}
				</Heading>
				<Text fontSize={'sm'}>{props.data.content}</Text>
			</Flex>
		</Flex>
	);
}
