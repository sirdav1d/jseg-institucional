import { Flex, Image } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Slide, SliderComponent, SwiperProps } from '../GeneralSlider/index';
import promo1 from '/assets/institucional-imgs/promo/promo1.svg';
import promo2 from '/assets/institucional-imgs/promo/promo2.svg';
import promo3 from '/assets/institucional-imgs/promo/promo3.svg';
import '../GeneralSlider/Slider.css';

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
		<Flex
			display={['none', 'none', 'none', 'flex']}>
			<SliderComponent settings={settings}>
				{promos.map((p, index) => {
					return (
						<Slide key={index}>
							<Image
								objectFit={[
									'contain',
									'contain',
									'contain',
									'contain',
									'cover',
								]}
								w={['90%', '90%', '90%', '100%']}
								h='100%'
								src={p}
							/>
						</Slide>
					);
				})}
			</SliderComponent>
		</Flex>
	);
}
