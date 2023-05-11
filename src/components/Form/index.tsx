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
import { useState } from 'react';
import { AnimateContainer, MotionFlex } from '../../Styles/animation';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');

	const handleNameChange = (e: any) => setName(e.target.value);
	const handleTelChange = (e: any) => setTel(e.target.value);

	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.700');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');

	const navigate = useNavigate();
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
				action='https://gmail.us21.list-manage.com/subscribe/post?u=4fa7838876d4535d0002ea553&amp;id=98a06c8b40&amp;f_id=007dbae1f0'
				method='post'
				// target='_blank'
				noValidate
				id='mc-embedded-subscribe-form'
				name='mc-embedded-subscribe-form'>
				<FormControl isRequired>
					<FormLabel>Nome:</FormLabel>
					<Input
						mb='8px'
						type={'text'}
						value={name}
						name='FULLNAME'
						onChange={handleNameChange}
						placeholder='Digite seu nome'
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Email:</FormLabel>
					<Input
						mb='8px'
						type={'email'}
						name='EMAIL'
						placeholder='Digite seu E-mail'
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Telefone:</FormLabel>
					<Input
						mb='8px'
						type={'tel'}
						value={tel}
						name='PHONE'
						onChange={handleTelChange}
						placeholder='(99)99999 - 9999'
					/>
				</FormControl>
				<FormControl
					as='fieldset'
					mb='8px'>
					<RadioGroup
						defaultValue='Residencia'
						colorScheme={'whatsapp'}>
						<Flex
							gap='24px'
							flexDir={['column', 'column', 'row']}>
							<Radio
								name='LOCAL3'
								value='Residencia'>
								Residência
							</Radio>
							<Radio
								name='LOCAL3'
								value='Condominio'>
								Condomínio
							</Radio>
							<Radio
								name='LOCAL3'
								value='Empresa'>
								Empresa
							</Radio>
						</Flex>
					</RadioGroup>
					<FormHelperText>
						Informe para receber orçamento personalizado
					</FormHelperText>
				</FormControl>
				<FormControl mb='8px'>
					<FormLabel>Soluções</FormLabel>
					<Select
						name='SOL7'
						placeholder='O que você precisa hoje?'>
						<option value={'CFTV'}>CFTV</option>
						<option value={'REDE'}>REDE DE INTERNET</option>
						<option value={'ALARME'}>ALARME</option>
						<option value={'ACESSO'}>CONTROLE DE ACESSO</option>
						<option value={'SOLAR'}>ENERGIA SOLAR</option>
						<option value={'TELEFONE'}>TELEFONIA</option>
						<option value={'SMART HOME'}>SMART HOME</option>
					</Select>
				</FormControl>
				<Button
					onClick={() => navigate('/thanks')}
					bgColor={'brand.dourado.500'}
					_hover={{ backgroundColor: 'brand.dourado.300' }}
					color='brand.cinza.100'
					w='100%'
					type='submit'
					fontWeight={'bold'}
					fontSize={'2xl'}>
					Enviar
				</Button>
			</form>
		</MotionFlex>
	);
}
