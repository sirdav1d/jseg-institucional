import { Flex, Image } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide, SliderComponent, SwiperProps } from './index';
import promo1 from '../../assets/institucional-imgs/promo/promo1.svg';
import promo2 from '../../assets/institucional-imgs/promo/promo2.svg';
import promo3 from '../../assets/institucional-imgs/promo/promo3.svg';
import './Slider.css';

export default function SliderPromo() {
	const promos = [promo1, promo2, promo3];
	const settings: SwiperProps = {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 100,
		navigation: { enabled: true },
		autoplay: { delay: 4000, disableOnInteraction: false },
		pagination: { clickable: true },
		slidesPerView: 1,
	};
	return (
		<Flex id='home'>
			<SliderComponent settings={settings}>
				{promos.map((p, index) => {
					return (
						<Slide key={index}>
							<Image src={p} />
						</Slide>
					);
				})}
			</SliderComponent>
			{/* <Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={100}
				navigation={{ enabled: true }}
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				pagination={{ clickable: true }}
				slidesPerView={1}>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'100%'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={promo1}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'100%'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={promo2}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						w={'100%'}
						height={'100%'}
						objectFit={'cover'}
						objectPosition={'center'}
						src={promo3}
					/>
				</SwiperSlide>
			</Swiper> */}
		</Flex>
	);
}
