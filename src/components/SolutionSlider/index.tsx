import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { SolutionsSliderData } from '../../mocks/data';
import ButtonGeneral from '../ButtonGeneral';
import { Slide, SliderComponent, SwiperProps } from '../GeneralSlider';

export default function SolutionsSlider() {
	const settings: SwiperProps = {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 100,
		navigation: { enabled: true },
		autoplay: { delay: 4000, disableOnInteraction: false },
		pagination: { clickable: true },
		slidesPerView: 1,
	};
	return (
		<Flex
			maxW='1024px'
			align={'center'}
			justify='center'>
			<SliderComponent settings={settings}>
				{SolutionsSliderData.map((s) => {
					return (
						<Slide key={s.title}>
							<Flex
								gap={'24px'}
								flexDir={['column', 'column', 'column', 'row']}
								justify={'center'}
								align='center'>
								<Image
									borderRadius={'12px'}
									h={['180px', '180px', '180px', '240px']}
									src={s.img}
								/>
								<Flex
									justify={'center'}
									align={['center', 'center', 'center', 'normal']}
									flexDir={'column'}
									gap='12px'>
									<Heading fontSize={['md', 'lg', 'xl', '2xl']}>
										{s.title}
									</Heading>
									<Text
										display={['none', 'none', 'none', 'inline-block']}
										fontSize={'sm'}>
										{s.content}
									</Text>
									<Link to={`${s.id}`}>
										<Box
											maxW='420px'
											bg={'brand.verde.500'}
											borderRadius={'4px'}
											p='12px'
											fontWeight={'bold'}
											color={'brand.branco'}
											w={['240px', '240px', '240px', '100%']}
											textAlign='center'
											shadow={'lg'}
											cursor={'pointer'}
											transition={'all .3s ease'}
											_hover={{
												bgColor: 'brand.verde.primary',
											}}>
											<Text fontSize={'xl'}>Saiba Mais</Text>
										</Box>
									</Link>
								</Flex>
							</Flex>
						</Slide>
					);
				})}
			</SliderComponent>
		</Flex>
	);
}
