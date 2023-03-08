import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Link,
	List,
	ListItem,
	UnorderedList,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineMenuFold } from 'react-icons/ai';
import ButtonHeader from '../ButtonHeader';
import Switcher from '../Switcher';
export function DrawerMenu(props: { data: any }) {
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
							<List
								display={'flex'}
								flexDir={'column'}
								alignItems='center'
								gap={'24px'}>
								<ListItem>
									<Switcher />
								</ListItem>
								{props.data.map((d: any) => {
									return (
										<ListItem>
											<Link
												href={d.link}
												fontSize={'md'}
												transition={'all .4s ease'}
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
							</List>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
