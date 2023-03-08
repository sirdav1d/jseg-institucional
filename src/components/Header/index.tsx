import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import logo from '../../assets/institucional-imgs/logo.svg';
import { DrawerMenu } from '../drawer';
import NavTag from '../Navigation';
import { INavProps } from '../Navigation';

export default function Header(props: { data: INavProps | any }) {
	const headerBg = useColorModeValue('brand.branco', 'brand.cinza.300');
	return (
		<Flex
			bg={headerBg}
			justify={'space-between'}
			color={'brand.verde.900'}
			p={['12px', '12px', '12px 20px', '12px 40px']}
			shadow='lg'
			w='100vw'
			transform={'auto'}
			position={'fixed'}
			zIndex={9}
			align={'center'}>
			<Link href='/'>
				<Image
					src={logo}
					width={['200px', '220px', '220px', '220px', '300px', '300px']}
				/>
			</Link>
			<NavTag data={props.data} />
			<Box display={['flex', 'flex', 'flex', 'none']}>
				<DrawerMenu data={props.data} />
			</Box>
		</Flex>
	);
}
