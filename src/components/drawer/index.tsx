import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Input,
	Link,
	ListItem,
	UnorderedList,
	useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineMenuFold } from 'react-icons/ai';
import ButtonHeader from '../Button';
import NavTag from '../Navigation';
export function DrawerMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>
				<AiOutlineMenuFold size={'32px'} />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerBody>
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
									<Link
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
