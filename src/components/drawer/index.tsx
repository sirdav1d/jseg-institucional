import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Link,
	ListItem,
	UnorderedList,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineMenuFold } from 'react-icons/ai';
import ButtonHeader from '../ButtonHeader';
import Switcher from '../Switcher';
export function DrawerMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const DrawerBg = useColorModeValue('brand.branco', 'brand.cinza.900');

	return (
		<>
			<Button
				transition={'all .3s ease'}
				bgColor={'transparent'}
				_hover={{ bgColor: 'transparent', color: 'brand.verde.primary' }}
				onClick={onOpen}>
				<AiOutlineMenuFold size={'32px'} />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent zIndex={99}>
					<DrawerCloseButton />

					<DrawerBody bgColor={DrawerBg}>
						<Flex
							align={'center'}
							justify='center'
							h='100%'
							w='100%'>
							<UnorderedList
								display={'flex'}
								flexDir={'column'}
								alignItems='center'
								gap={'24px'}>
								<ListItem>
									<Switcher />
								</ListItem>
								<ListItem>
									<Link
										href='#home'
										fontSize={'md'}
										transition={'all .4s ease'}
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
										fontSize={'md'}
										transition={'all .4s ease'}
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
										fontSize={'md'}
										transition={'all .4s ease'}
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
										fontSize={'md'}
										transition={'all .4s ease'}
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
										fontSize={'md'}
										transition={'all .4s ease'}
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
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
