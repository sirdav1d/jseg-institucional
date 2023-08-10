import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BannerLGPD() {
	const lgpdBg = useColorModeValue('whitesmoke', 'brand.cinza.500');
	const lgpdTxt = useColorModeValue('brand.cinza.700', 'whitesmoke');
	const [accept, setAccept] = useState(false);
	const navigate = useNavigate();

	function getLGPD() {
		const resp = localStorage.getItem('lgpd');
		if (resp) {
			const lgpd = JSON.stringify(resp);
			setAccept(true);
		} else {
			setAccept(false);
		}
	}

	function handleAccept() {
		setAccept(true);
		const req = localStorage.setItem('lgpd', 'Aceito');
		console.log(req);
		navigate({ pathname: '/' }, { preventScrollReset: false });
	}

	function handleDeny() {
		setAccept(false);
		const req = JSON.stringify(localStorage.clear());
		window.alert(
			'Para ter uma melhor experiência, aceite nossas políticas de privacidade e termos de uso',
		);
		console.log(req);
	}

	useEffect(() => {
		getLGPD();
	}, []);

	return (
		<>
			{!accept && (
				<Box
					w={'100vw'}
					h={'auto'}
					p={'20px 40px'}
					pos={'fixed'}
					bottom={0}
					left={0}
					zIndex={99999999}
					color={lgpdTxt}
					bg={lgpdBg}>
					<Flex
						w={'100%'}
						flexDir={['column', 'column', 'row']}
						alignItems={'center'}
						justify={'center'}
						gap={'40px'}
						fontSize={'sm'}
						h={'100%'}>
						<p>
							Nós utilizamos cookies para melhorar sua experiência como usuário.
							Para conferir detalhadamente nossas boas práticas, clique em{' '}
							<a
								href='/Política Privacidade - JSEG.pdf'
								target='_blank'
								rel='noopener noreferrer'>
								<u>Políticas de Privadicade</u>
							</a>{' '}
							e{' '}
							<a
								href='/Termos de uso - JSEG.pdf'
								target='_blank'
								rel='noopener noreferrer'>
								<u>Termos de Uso.</u>
							</a>
						</p>
						<Flex
							gap={'20px'}
							alignItems={'center'}>
							<Box
								borderRadius={'full'}
								bg={'green.500'}
								p={'8px 16px'}
								color={'whiteAlpha.900'}>
								<button onClick={handleAccept}>Aceitar</button>
							</Box>
							<Box
								textDecorationLine={'underline'}
								textDecor={'underline'}>
								<button onClick={handleDeny}>Recusar</button>
							</Box>
						</Flex>
					</Flex>
				</Box>
			)}
		</>
	);
}
