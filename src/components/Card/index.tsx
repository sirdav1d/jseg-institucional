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
			justify={'center'}
			flexDir={['column', 'column', props.data.direction, props.data.direction]}
			align='center'
			gap={['8px', '8px', '24px', '40px']}>
			<Image
				objectFit='cover'
				src={props.data.img}
				borderRadius='16px'
			/>
			<Flex
				flexWrap='wrap'
				flexDir={'column'}>
				<Heading
					fontSize={'2xl'}
					mb='12px'>
					{props.data.title}
				</Heading>
				<Text fontSize={['md', 'md', 'md', 'md', 'lg']}>
					{props.data.content}
				</Text>
			</Flex>
		</Flex>
	);
}
