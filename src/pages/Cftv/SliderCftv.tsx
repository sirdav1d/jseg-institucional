import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { GeneralData } from '../../mocks/data';
import ButtonGeneral from '../../components/ButtonGeneral';
import {
	Slide,
	SliderComponent,
	SwiperProps,
} from '../../components/GeneralSlider';

export default function SliderCftv() {
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
			m='0px auto'
			align={'center'}
			justify='center'>
			<SliderComponent settings={settings}>
				{GeneralData.cftv.produtos.map((s) => {
					return (
						<Slide key={s.title}>
							<Flex
								gap={'24px'}
								flexDir={['column', 'column', 'column', 'row']}
								justify={'center'}
								align='center'>
								<Image
									borderRadius={'12px'}
									h={['180px', '180px', '180px', '440px']}
									src={s.img}
								/>
								<Flex
									justify={'center'}
									align='center'
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
									<Link to={'/'}>
										<ButtonGeneral
											text={'Saiba Mais'}
											size={['lg', 'lg', 'xl', '2xl']}
										/>
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
