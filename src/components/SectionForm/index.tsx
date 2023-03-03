import { Divider, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import ButtonGeneral from '../ButtonGeneral';
import Form from '../Form';

export default function SectionForm() {
	const textColor = useColorModeValue('brand.preto', 'brand.branco');
	const HeadingColor = useColorModeValue('brand.preto', 'brand.cinza.100');
	return (
		<>
			<Flex
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
					<Heading
						color={HeadingColor}
						fontSize={['2xl', '2xl', '3xl', '3xl', '4xl']}
						fontFamily={'Montserrat'}>
						Seu parceiro Intelbras no centro de Niterói
					</Heading>
					<Text fontSize={['sm', 'md', 'lg', 'lg', 'xl']}>
						Oferecemos os melhores equipamentos de rede e segurança com a
						qualidade e confiabilidade da Intelbras, no coração de Niterói
					</Text>
					<ButtonGeneral
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
