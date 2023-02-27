import { Box, Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/institucional-imgs/logo.svg';
import { DrawerMenu } from '../drawer';
import NavTag from '../Navigation';

export default function Header() {
	return (
		<Flex
			bg={'brand.branco'}
			justify={'space-between'}
			color={'brand.verde.900'}
			p={['8px', '8px', '8px', '12px 40px']}
			align={'center'}>
			<Image
				src={logo}
				width={['180px', '220px', '220px', '220px', '300px', '300px']}
			/>
			<NavTag page={'inst'} />
			<Box display={['flex', 'flex', 'flex', 'none']}>
				<DrawerMenu />
			</Box>
		</Flex>
	);
}
