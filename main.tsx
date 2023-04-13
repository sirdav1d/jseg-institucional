import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './src/Styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
