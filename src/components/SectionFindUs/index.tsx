import {
	Divider,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import ButtonGeneral from '../ButtonGeneral';
import Form from '../Form';

export default function FindUs() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			id='findUs'
			align={'center'}
			flexDir='column'
			gap='20px'
			padding={'20px 20px 0px'}
			justify='center'>
			<Heading
				textAlign={'center'}
				color={HeadingColor}
				m='0px 20px'
				fontFamily={'Montserrat'}>
				Venha nos fazer uma visita!
			</Heading>
			<Flex
				shadow={'lg'}
				p='24px'
				flexDir={['column', 'column', 'column', 'row']}
				minW='348px'
				justify={'space-between'}
				gap='40px'
				align='center'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.530121296829!2d-43.12146778520169!3d-22.893809785018412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983c3b5bfb783%3A0x8e73cd566abcceda!2sAv.%20Ernani%20do%20Amaral%20Peixoto%2C%20436%20-%20Centro%2C%20Niter%C3%B3i%20-%20RJ%2C%2024020-077!5e0!3m2!1spt-BR!2sbr!4v1677645954377!5m2!1spt-BR!2sbr'
					style={{ borderRadius: '4px', width: '348px', height: '348px' }}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
				<Text
					maxW='400px'
					textAlign={'justify'}
					fontSize={['md', 'md', 'md', 'xl']}>
					Nosso endereço fica no coração do centro de Niterói, uma região muito
					movimentada e conhecida pela sua infraestrutura comercial. Estamos
					próximos a diversas linhas de ônibus, o que facilita bastante o acesso
					de nossos clientes.
				</Text>
			</Flex>
			<Divider />
			<Flex
				maxW='880px'
				p='24px'
				justify='center'
				gap='20px'
				align={'center'}>
				<Flex
					gap='20px'
					w='100%'
					justify='left'
					align={'center'}
					flexDir={'column'}>
					<Heading
						fontSize={['2xl', '2xl', '2xl', '3xl', '4xl']}
						textAlign={'center'}
						color={HeadingColor}
						fontFamily={'Montserrat'}>
						Agora que conhece mais sobre nossa história, não perca a
						oportunidade e deixe a gente te ajudar!
					</Heading>
					<Text
						textAlign={'center'}
						fontSize={['md', 'md', 'lg', 'xl']}>
						Temos consultores qualificados e prontos pra te atender a um clique
						de distância
					</Text>
					<ButtonGeneral
						size={['lg', 'lg', 'xl']}
						text='Falar com Consultor'
					/>
				</Flex>
			</Flex>
			<Divider />
		</Flex>
	);
}
