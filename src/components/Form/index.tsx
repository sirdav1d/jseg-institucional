import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Select,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ButtonGeneral from '../ButtonGeneral';

export default function Form() {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');

	const handleNameChange = (e: any) => setName(e.target.value);
	const handleTelChange = (e: any) => setTel(e.target.value);

	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.700');

	return (
		<Flex
			minWidth={'348px'}
			flexWrap='wrap'
			shadow={'2xl'}
			bgColor={bgColor}
			flexDir={'column'}
			m={['0px', '0px', '0 20px']}
			p='20px'
			justify={'center'}
			align='center'
			borderRadius={'4px'}
			gap='24px'>
			<Heading
				fontFamily={'Montserrat'}
				fontSize={['lg', 'lg', 'xl', '2xl']}
				textAlign='center'>
				Formulário de Contato com Especialista em Vendas
			</Heading>
			<FormControl isRequired>
				<FormLabel>Nome:</FormLabel>
				<Input
					type={'text'}
					value={name}
					onChange={handleNameChange}
					placeholder='Digite seu nome'
				/>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Telefone:</FormLabel>
				<Input
					type={'tel'}
					value={tel}
					onChange={handleTelChange}
					placeholder='(99)99999 - 9999'
				/>
			</FormControl>
			<FormControl as='fieldset'>
				<RadioGroup
					defaultValue='Residencia'
					colorScheme={'whatsapp'}>
					<Flex
						gap='24px'
						flexDir={['column', 'column', 'row']}>
						<Radio value='Residencia'>Residência</Radio>
						<Radio value='Condominio'>Condomínio</Radio>
						<Radio value='Empresa'>Empresa</Radio>
					</Flex>
				</RadioGroup>
				<FormHelperText>
					Informe para receber orçamento personalizado
				</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Soluções</FormLabel>
				<Select placeholder='O que você precisa hoje?'>
					<option>CFTV</option>
					<option>REDE DE INTERNET</option>
					<option>ENERGIA SOLAR</option>
					<option>TELEFONIA</option>
					<option>ALARME</option>
					<option>CONTROLE DE ACESSO</option>
					<option>SMART HOME</option>
				</Select>
			</FormControl>
			<ButtonGeneral
				bgColor={'brand.dourado.500'}
				text='Enviar'
				size={'2xl'}
			/>
		</Flex>
	);
}
