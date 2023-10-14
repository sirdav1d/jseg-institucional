import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import wppImage from '/assets/institucional-imgs/logo_whatsapp.webp';
import b1smart from '/assets/smartHome-imgs/beneficios/b1.svg';
import b2smart from '/assets/smartHome-imgs/beneficios/b2.svg';
import b3smart from '/assets/smartHome-imgs/beneficios/b3.svg';
import b4smart from '/assets/smartHome-imgs/beneficios/b4.svg';
import p1smart from '/assets/smartHome-imgs/produtos/p1.svg';
import p2smart from '/assets/smartHome-imgs/produtos/p2.svg';
import p3smart from '/assets/smartHome-imgs/produtos/p3.svg';

export default function SmartHome() {
	const bgColor = useColorModeValue('brand.cinza.100', 'brand.cinza.900');
	const DataNavigationLP = {
		items: [
			{
				link: '#Home',
				navItem: 'Home',
			},
			{
				link: '#benefits',
				navItem: 'Benefícios',
			},
			,
			{
				link: '#findUs',
				navItem: 'Nos Encontre',
			},
			{
				link: '/',
				navItem: 'Institucional',
			},
		],
	};

	const GeneralData = {
		smartHome: {
			produtos: [
				{
					img: p1smart,
					title: 'Kit de Iluminação Inteligente',
					content:
						'O interruptor de luz inteligente permite controlar as luzes da sua casa por meio de um aplicativo no smartphone ou por comando de voz, e é compatível com outros dispositivos inteligentes, como Amazon Alexa e Google Assistant.',
				},
				{
					img: p2smart,
					title: 'Controle remoto universal',
					content:
						'O controle remoto universal da Intelbras permite controlar diversos dispositivos eletrônicos, como TV, som, ar-condicionado e outros aparelhos, por meio de um único dispositivo. Ele é compatível com diversos modelos e marcas de equipamentos.',
				},
				{
					img: p3smart,
					title: 'Câmera Wi-Fi - iMX1 com microSD 32GB',
					content:
						'Para registrar tudo, o modelo capta imagens em resolução HD e conta com interação por voz, visão noturna e cartão micro-SD 32GB. Sinta-se sempre pertinho do seu bebê! Use a função Babá Eletrônica para acompanhar todos os momentos em tempo real pelo app Mibo Cam.',
				},
			],
			beneficios: [
				{
					img: b1smart,
					title: 'Conforto',
					content:
						'Com a automação residencial, você pode controlar facilmente a iluminação, temperatura e outros sistemas de sua casa sem precisar se levantar ou se mover, tornando seu dia a dia mais confortável.',
				},
				{
					img: b2smart,
					title: 'Entretenimento',
					content:
						'A automação residencial permite controlar facilmente seu sistema de entretenimento, incluindo televisão, som e jogos, tornando suas horas de lazer mais agradáveis.',
				},
				{
					img: b3smart,
					title: 'Economia de energia',
					content:
						'A automação residencial pode ajudar a reduzir sua conta de energia, já que você pode controlar o uso de luzes e aparelhos eletrônicos remotamente, garantindo que eles não sejam deixados ligados desnecessariamente.',
				},
				{
					img: b4smart,
					title: 'Gerenciamento remoto',
					content:
						'Com a automação residencial, você pode gerenciar a casa remotamente, mesmo estando fora de casa, para garantir que tudo esteja em ordem.',
				},
			],
		},
	};

	return (
		<>
			<Header data={DataNavigationLP.items} />
			<Box
				pos='fixed'
				transition={'all .3s ease'}
				cursor={'pointer'}
				bottom='20px'
				opacity={0.8}
				zIndex={99999}
				_hover={{ opacity: 1 }}
				left={['0px', '8px', '8px', '20px']}>
				<Link href='https://api.whatsapp.com/send?phone=5521999624160&text=Ol%C3%A1%20vim%20pela%20Landing%20Page%20e%20gostaria%20de%20montar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar?'>
					<Image
						w={['52px', '52px', '60px', '60px']}
						src={wppImage}
						alt='logo whatsapp'
					/>
				</Link>
			</Box>

			<Flex
				overflowX={'hidden'}
				gap={['40px', '60px']}
				flexDir={'column'}
				bgColor={bgColor}>
				<InitalSectionLP
					headLine={'Aproveite nossas soluções de Automação Residêncial'}
					subHeadLine={
						'Entre em contato conosco hoje mesmo e deixe-nos ajudá-lo a transformar sua casa em um lar inteligente!'
					}
				/>
				<SliderProducts data={GeneralData.smartHome.produtos} />
				<SectionBenefit data={GeneralData.smartHome.beneficios} />
				<SectionCTA
					text={
						'Procurando uma empresa parceira e de confiança?' +
						' Clique aqui e faça seu orçamento'
					}
					btnText={'Orçamento Rápido'}
				/>
				<FindUs />
				<Footer />
			</Flex>
		</>
	);
}
