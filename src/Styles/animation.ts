import {
	Flex,
	FlexProps,
	Heading,
	HeadingProps,
	Text,
	Image,
	ImageProps,
	TextProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const AnimateContainer = {
	start: {
		opacity: 0,
		scale: 0,
		y: 100,
	},
	end: {
		opacity: 1,
		scale: 1,
		y: 0,

		transitions: {
			delayChildren: 0.3,
			staggerChildren: 0.5,
		},
	},
};
export const MotionFlex = motion<FlexProps>(Flex);

export const AnimateText = {
	start: {
		opacity: 0,
		translateX: -200,
	},
	end: {
		opacity: 1,
		translateX: 0,
		transitions: {
			duration: 2,
			delay: 1,
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

export const MotionHeading = motion<HeadingProps>(Heading);

export const AnimateCTA = {
	start: {
		opacity: 0,
		translateX: -400,
	},
	end: {
		opacity: 1,
		translateX: 0,
		transitions: {
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

export const MotionText = motion<TextProps>(Text);

export const MotionImage = motion<ImageProps>(Image);
