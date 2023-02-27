import { Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import promo1 from '../../assets/institucional-imgs/promo/promo1.svg';
import teste from '../../assets/institucional-imgs/promo/teste.svg';
import './Slider.css';

export default function SliderPromo() {
	return (
		<Flex id='home'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				navigation={{ enabled: true }}
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				pagination={{ clickable: true }}
				slidesPerView={1}>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'auto'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={promo1}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'auto'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={teste}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'auto'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={promo1}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'auto'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={teste}
					/>
				</SwiperSlide>
			</Swiper>
		</Flex>
	);
}
