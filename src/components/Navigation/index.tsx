import { Flex, Heading, Link, List, ListItem, Text } from '@chakra-ui/react';
import ButtonHeader from '../ButtonHeader';
import Switcher from '../Switcher';

export interface INavProps {
	items: [
		{
			link: string;
			navItem: string;
		},
	];
}

export default function NavTag(props: { data: INavProps | any }) {
	return (
		<>
			<Flex
				align='center'
				display={['none', 'none', 'none', 'flex']}>
				<List
					display={'flex'}
					alignItems='center'
					gap={'24px'}>
					{props.data.map((d: any) => {
						return (
							<ListItem>
								<Link
									href={d.link}
									fontSize={['small', 'small', 'small', 'sm', 'md']}
									transition={'all .3s ease'}
									_hover={{
										textDecor: 'none',
										color: 'brand.verde.primary',
									}}
									textDecor={'none'}>
									{d.navItem}
								</Link>
							</ListItem>
						);
					})}
					{/* <ListItem>
						<Link
							href='#home'
							fontSize={['small', 'small', 'small', 'sm', 'md']}
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
							href='#benefits'
							fontSize={['small', 'small', 'small', 'sm', 'md']}
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
							href='#solutions'
							fontSize={['small', 'small', 'small', 'sm', 'md']}
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
							href='#who'
							fontSize={['small', 'small', 'small', 'sm', 'md']}
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
							href='#findUs'
							fontSize={['small', 'small', 'small', 'sm', 'md']}
							transition={'all .3s ease'}
							_hover={{
								textDecor: 'none',
								color: 'brand.verde.primary',
							}}
							textDecor={'none'}>
							Nos Encontre
						</Link>
					</ListItem> */}
					<ListItem>
						<ButtonHeader />
					</ListItem>
					<ListItem>
						<Switcher />
					</ListItem>
				</List>
			</Flex>
		</>
	);
}
