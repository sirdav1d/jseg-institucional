import { Divider, Flex, useColorModeValue } from '@chakra-ui/react';
import { AnimateText, MotionHeading, MotionText } from '../../Styles/animation';
import ButtonGeneral from '../ButtonGeneral';
import Form from '../Form';

export default function SectionForm() {
	const textColor = useColorModeValue('brand.preto', 'brand.branco');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<>
			<Flex
				id='home'
				m={['0px 40px', '20px 40px', '20px 40px', '20px 80px']}
				gap='28px'
				align={'center'}
				justify={'center'}
				flexDir={['column', 'column', 'column', 'row']}
				color={textColor}>
				<Flex
					mt={['0px 40px 40px', '0px', '0px', '80px']}
					flexDir={'column'}
					gap='20px'
					align={['center', 'center', 'center', 'start']}
					textAlign={'left'}
					w={['100%', '100%', '100%', '40%']}>
					<MotionHeading
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.2 }}
						color={HeadingColor}
						fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']}
						fontFamily={'Montserrat'}>
						Seu parceiro Intelbras no centro de Niterói
					</MotionHeading>
					<MotionText
						variants={AnimateText}
						initial={'start'}
						whileInView={'end'}
						viewport={{ once: true, amount: 0.2 }}
						fontSize={['sm', 'md', 'lg', 'lg', 'xl']}>
						Oferecemos os melhores equipamentos de rede e segurança com a
						qualidade e confiabilidade da Intelbras, no coração de Niterói
					</MotionText>
					<ButtonGeneral
						data='https://api.whatsapp.com/send?phone=5521971602106&text=Ol%C3%A1%20estava%20navegando%20pelo%20seu%20site,%20gostaria%20de%20montar%20um%20or%C3%A7amento!'
						size={['lg', 'lg', 'xl']}
						text='Falar com Consultor'
					/>
				</Flex>
				<Flex
					w={['100%', '100%', '100%', '100%', '40%']}
					justify={'center'}
					align='center'>
					<Form />
				</Flex>
			</Flex>
			<Divider />
		</>
	);
}
