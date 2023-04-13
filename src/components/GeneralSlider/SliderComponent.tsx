import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperProps } from 'swiper/react';
import './Slider.css';

interface SwiperComponentProps {
	settings: SwiperProps;
	children: ReactNode;
}

export default function SliderComponent({
	settings,
	children,
}: SwiperComponentProps) {
	return <Swiper {...settings}>{children}</Swiper>;
}
