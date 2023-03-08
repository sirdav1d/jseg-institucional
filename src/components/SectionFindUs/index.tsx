import {
	Divider,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	AnimateContainer,
	AnimateText,
	MotionFlex,
	MotionHeading,
	MotionText,
} from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';
import Form from '../Form';

export default function FindUs() {
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<Flex
			id='findUs'
			align={'center'}
			flexDir='column'
			padding={'20px 20px 0px'}
			justify='center'>
			<MotionHeading
				variants={AnimateText}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.2 }}
				textAlign={'left'}
				color={HeadingColor}
				fontFamily={'Montserrat'}>
				Venha nos fazer uma visita!
			</MotionHeading>
			<MotionFlex
				variants={AnimateContainer}
				initial={'start'}
				whileInView={'end'}
				viewport={{ once: true, amount: 0.3 }}
				shadow={'lg'}
				p='20px'
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
					textAlign={'left'}
					fontSize={['md', 'md', 'md', 'lg']}>
					Nosso endereço fica no coração do centro de Niterói, uma região muito
					movimentada e conhecida pela sua infraestrutura comercial. Estamos
					próximos a diversas linhas de ônibus, o que facilita bastante o acesso
					de nossos clientes.
				</Text>
			</MotionFlex>
			<Divider />
			<Flex
				maxW='880px'
				mt='40px'
				p='24px'
				justify='center'
				gap='20px'
				align={'center'}>
				<Flex
					gap='20px'
					w='100%'
					justify='left'
					flexDir={'column'}>
					<MotionHeading
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.5 }}
						fontSize={['2xl', '2xl', '2xl', '3xl', '4xl']}
						textAlign={'left'}
						color={HeadingColor}
						fontFamily={'Montserrat'}>
						Agora que conhece mais sobre nossa história, não perca a
						oportunidade e deixe a gente te ajudar!
					</MotionHeading>
					<MotionText
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.5 }}
						textAlign={'left'}
						fontSize={['md', 'md', 'lg', 'xl']}>
						Temos consultores qualificados e prontos pra te atender a um clique
						de distância
					</MotionText>
					<ButtonGeneral
						data='https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
						size={['lg', 'lg', 'xl']}
						text='Falar com Consultor'
					/>
				</Flex>
			</Flex>
			<Divider />
		</Flex>
	);
}
