import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
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
		<Flex maxW='1024px'>
			<SliderComponent settings={settings}>
				{SolutionsSliderData.map((s) => {
					return (
						<Slide>
							<Flex
								gap='24px'
								flexDir={['column', 'column', 'column', 'row']}
								justify={'center'}
								align='center'>
								<Image
									borderRadius={'12px'}
									h={['140px', '140px', '180px', '240px']}
									src={s.img}
								/>
								<Flex
									flexDir={'column'}
									gap='12px'>
									<Heading fontSize={['lg', 'lg', 'xl', '2xl']}>
										{s.title}
									</Heading>
									<Text
										display={['none', 'none', 'none', 'inline-block']}
										fontSize={'sm'}>
										{s.content}
									</Text>
									<ButtonGeneral
										text={'Saiba Mais'}
										size={['lg', 'lg', 'xl', '2xl']}
									/>
								</Flex>
							</Flex>
						</Slide>
					);
				})}
			</SliderComponent>
		</Flex>
	);
}
