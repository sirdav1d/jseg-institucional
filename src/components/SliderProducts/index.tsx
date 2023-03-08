import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import ButtonGeneral from '../../components/ButtonGeneral';
import {
	Slide,
	SliderComponent,
	SwiperProps,
} from '../../components/GeneralSlider';

export default function SliderProducts(props: { data: any }) {
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
				{props.data.map((s: any) => {
					return (
						<Slide key={s.title}>
							<Flex
								flexDir={['column', 'column', 'column', 'row']}
								justify={'center'}
								gap='20px'
								p='12px'
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

									<ButtonGeneral
										data={
											'https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
										}
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
