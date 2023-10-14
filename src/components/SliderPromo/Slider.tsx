import { Flex, Image } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Slide, SliderComponent, SwiperProps } from '../GeneralSlider/index';
import '../GeneralSlider/Slider.css';
import promo1 from '/assets/institucional-imgs/promo/smart_home_promo1.webp';
import promo2 from '/assets/institucional-imgs/promo/cftv_intelbras_black_promo2.webp';
import promo3 from '/assets/institucional-imgs/promo/solar_intelbras_promo3.webp';

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
		<Flex display={['none', 'none', 'none', 'flex']}>
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
								alt={'promo images'}
							/>
						</Slide>
					);
				})}
			</SliderComponent>
		</Flex>
	);
}
