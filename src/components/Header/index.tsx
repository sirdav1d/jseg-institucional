import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import logo from '../../assets/institucional-imgs/logo.svg';
import { DrawerMenu } from '../drawer';
import NavTag from '../Navigation';

export default function Header() {
	const headerBg = useColorModeValue('brand.branco', 'brand.cinza.300');
	return (
		<Flex
			bg={headerBg}
			justify={'space-between'}
			color={'brand.verde.900'}
			p={['8px', '8px', '8px', '12px 40px']}
			shadow='lg'
			w='100vw'
			transform={'auto'}
			position={'fixed'}
			zIndex={9}
			
			align={'center'}>
			<Link href='/'>
				<Image
					src={logo}
					width={['180px', '220px', '220px', '220px', '300px', '300px']}
				/>
			</Link>
			<NavTag page={'inst'} />
			<Box display={['flex', 'flex', 'flex', 'none']}>
				<DrawerMenu />
			</Box>
		</Flex>
	);
}
