/** @format */

import emailjs from '@emailjs/browser';
import {
	Button,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Radio,
	RadioGroup,
	Select,
	useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { AnimateContainer, MotionFlex } from '../../Styles/animation';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');
	const [email, setEmail] = useState('');
	const [opt, setOpt] = useState('');
	const [usual, setUsual] = useState('');

	const message = `Me Chamo ${name}, telefone: ${tel}, email: ${email}. Preciso de ajuda sobre soluções de ${opt} para ${usual}`;

	const templateParams = {
		from_name: name,
		to_name:'JSEG Equipamentos', 
		message: message,
		email: email,
		tel: tel,
	};

	const navigate = useNavigate();

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsDisable(true);
		emailjs
			.send(
				'service_ym56mme',
				'template_m7qd9tn',
				templateParams,
				'thIqgjNi2ETIwWY2w',
			)
			.then(
				(result) => {
					alert('Email Enviado');
					console.log(result.text);
					setName('');
					setEmail('');
					setOpt('');
					setUsual('');
					setTel('');
					setIsDisable(false);
					navigate('/thanks');
				},
				(error) => {
					alert(`Algo deu Errado - ${error}`);
					console.log(error);
				},
			);
	};

	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.700');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');

	const [isDisable, setIsDisable] = useState(true);

	useEffect(() => {
		if (name == '' || tel == '' || email == '' || opt == '' || usual == '') {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
		console.log(isDisable);
	}, [name, tel, usual, opt, email]);

	return (
		<MotionFlex
			variants={AnimateContainer}
			maxW='480px'
			minWidth={'348px'}
			flexWrap='wrap'
			shadow={'xl'}
			bgColor={bgColor}
			flexDir={'column'}
			m={['0px', '0px', '0 20px']}
			p='20px'
			justify={'center'}
			align='center'
			borderRadius={'4px'}
			gap='24px'
			viewport={{ once: true, amount: 0.1 }}
			initial='start'
			whileInView='end'>
			<Heading
				color={HeadingColor}
				fontFamily={'Montserrat'}
				fontSize={['lg', 'lg', 'xl', '2xl']}
				textAlign='center'>
				Formulário de Contato com Especialista em Vendas
			</Heading>
			<form
				id='form'
				onSubmit={(e) => sendEmail(e)}>
				<FormControl isRequired>
					<FormLabel>Nome:</FormLabel>
					<Input
						as={Input}
						required={true}
						mb='8px'
						type={'text'}
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Digite seu nome'
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Email:</FormLabel>
					<Input
						as={Input}
						isRequired
						mb='8px'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Digite seu E-mail'
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Telefone:</FormLabel>
					<Input
						as={Input}
						required={true}
						mb='8px'
						type='tel'
						value={tel}
						onChange={(e) => setTel(e.target.value)}
						placeholder='(99)99999 - 9999'
					/>
				</FormControl>
				<FormControl
					isRequired
					as='fieldset'
					mb='8px'>
					<RadioGroup
						aria-required={'true'}
						defaultValue='Residencia'
						value={usual}
						colorScheme={'whatsapp'}>
						<Flex
							gap='24px'
							flexDir={['column', 'column', 'row']}>
							<Radio
								onChange={(e) => setUsual(e.target.value)}
								value='RESIDÊNCIA'>
								Residência
							</Radio>
							<Radio
								onChange={(e) => setUsual(e.target.value)}
								value='CONDOMÍNIO'>
								Condomínio
							</Radio>
							<Radio
								onChange={(e) => setUsual(e.target.value)}
								value='EMPRESA'>
								Empresa
							</Radio>
						</Flex>
					</RadioGroup>
					<FormHelperText>
						Informe para receber orçamento personalizado
					</FormHelperText>
				</FormControl>
				<FormControl
					mb='8px'
					isRequired>
					<FormLabel>Soluções</FormLabel>
					<Select
						placeholder='O que você precisa hoje?'
						value={opt}
						onChange={(e) => setOpt(e.target.value)}>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='CFTV'>
							CFTV
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='REDE DE INTERNET'>
							REDE DE INTERNET
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='ALARME'>
							ALARME
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='CONTROLE DE ACESSO'>
							CONTROLE DE ACESSO
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='ENERGIA SOLAR'>
							ENERGIA SOLAR
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='TELEFONIA'>
							TELEFONIA
						</option>
						<option
							onChange={(e) => setOpt(e.currentTarget.value)}
							value='SMART HOME'>
							SMART HOME
						</option>
					</Select>
				</FormControl>
				<Button
					isDisabled={isDisable}
					bgColor={'brand.dourado.500'}
					_hover={{ backgroundColor: 'brand.dourado.300' }}
					color='brand.cinza.100'
					w='100%'
					type='submit'
					fontWeight={'semibold'}
					mt={'8px'}
					fontSize={'xl'}>
					Enviar
				</Button>
			</form>
		</MotionFlex>
	);
}
