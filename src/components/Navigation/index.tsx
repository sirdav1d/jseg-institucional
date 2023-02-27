import { Flex, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';
import ButtonHeader from '../Button';

export default function NavTag(props: { page: string }) {
	return (
		<>
			{props.page == 'tks' ? (
				''
			) : (
				<Flex
					align='center'
					display={['none', 'none', 'none', 'flex']}>
					<UnorderedList
						display={'flex'}
						alignItems='center'
						gap={'24px'}>
						<ListItem>
							<Link
								fontSize={['small', 'small', 'small', 'md']}
								transition={'all .3s ease'}
								_hover={{
									textDecor: 'none',
									color: 'brand.verde.primary',
								}}
								textDecor={'none'}>
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link
								fontSize={['small', 'small', 'small', 'md']}
								transition={'all .3s ease'}
								_hover={{
									textDecor: 'none',
									color: 'brand.verde.primary',
								}}
								textDecor={'none'}>
								Benefícios
							</Link>
						</ListItem>
						<ListItem>
							<Link
								fontSize={['small', 'small', 'small', 'md']}
								transition={'all .3s ease'}
								_hover={{
									textDecor: 'none',
									color: 'brand.verde.primary',
								}}
								textDecor={'none'}>
								Soluções
							</Link>
						</ListItem>
						<ListItem>
							<Link
								fontSize={['small', 'small', 'small', 'md']}
								transition={'all .3s ease'}
								_hover={{
									textDecor: 'none',
									color: 'brand.verde.primary',
								}}
								textDecor={'none'}>
								Quem Somos
							</Link>
						</ListItem>
						<ListItem>
							<Link
								fontSize={['small', 'small', 'small', 'md']}
								transition={'all .3s ease'}
								_hover={{
									textDecor: 'none',
									color: 'brand.verde.primary',
								}}
								textDecor={'none'}>
								Nos Encontre
							</Link>
						</ListItem>
						<ListItem>
							<ButtonHeader />
						</ListItem>
					</UnorderedList>
				</Flex>
			)}
		</>
	);
}
