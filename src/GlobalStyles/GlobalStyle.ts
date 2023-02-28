import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'system',
};

const colors = {
	brand: {
		verde: {
			primary: '#00BB0D',
			500: '#03A60E',
			700: '#008409',
			900: '#225945',
		},
		dourado: {
			300: '#E8BC6C',
			500: '#D9B166',
			700: '#B89656',
		},
		preto: '#26010B',
		branco: '#FEF9F9',
		cinza: {
			100: '#F3F3F3',
			300: '#D4D4D4',
			500: '#909090',
			600: '#5e6573',
			700: '#636363',
			900: '#262626',
		},
	},
};

export const theme = extendTheme({
	config,
	colors,
	styles: {
		global: {
			body: {
				scrollBehavior: 'smooth',
				fontFamily: 'Montserrat',
				height: '100%',
				minHeight: '100vh',
			},
			li: {
				listStyle: 'none',
			},
			'*': {
				fontFamily: 'Montserrat',
				scrollBehavior: 'smooth',
				scrollMarginBlockStart: '88px',
			},
			'::-webkit-scrollbar': {
				width: '8px',
				backgroundColor: colors.brand.cinza[700],
			},

			'::-webkit-scrollbar-track': {
				boxShadow: `0 0 8px ${colors.brand.cinza[900]}`,
			},

			'::-webkit-scrollbar-thumb': {
				backgroundColor: colors.brand.cinza[900],
				borderRadius: '2px',
				height: '2px',
			},
		},
	},
});
