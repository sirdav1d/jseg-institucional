import { Flex, Link, List, ListItem } from '@chakra-ui/react';
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
							<ListItem key={d.link}>
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
