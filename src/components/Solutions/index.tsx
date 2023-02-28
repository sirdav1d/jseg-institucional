import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Solutions() {
	return (
		<Flex
			flexDir={'column'}
			align='center'
			justify={'center'}
			gap='24px'>
			<Heading fontFamily={'Montserrat'}>
				Temos a solução que você está procurando
			</Heading>
		</Flex>
	);
}
