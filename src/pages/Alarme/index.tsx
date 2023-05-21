import { Box, Flex, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InitalSectionLP from '../../components/InitialSectionLP';
import SectionBenefit from '../../components/SectionBenefit';
import SectionCTA from '../../components/SectionCTA';
import FindUs from '../../components/SectionFindUs';
import SliderProducts from '../../components/SliderProducts';
import b1alarme from '/assets/alarme-imgs/beneficios/b1.svg';
import b2alarme from '/assets/alarme-imgs/beneficios/b2.svg';
import b3alarme from '/assets/alarme-imgs/beneficios/b3.svg';
import b4alarme from '/assets/alarme-imgs/beneficios/b4.svg';
import p1alarme from '/assets/alarme-imgs/produtos/p1.svg';
import p2alarme from '/assets/alarme-imgs/produtos/p2.svg';
import p3alarme from '/assets/alarme-imgs/produtos/p3.svg';
import wppImage from '/assets/institucional-imgs/wpp.svg';

export default function Telefonia() {
	const bgColor = useColorModeValue('brand.branco', 'brand.cinza.900');
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
		alarme: {
			produtos: [
				{
					img: p1alarme,
					title: 'Sistema de alarme - Kit ANM 24 NET',
					content:
						'Sistema de alarme não monitorado com conexão via nuvem que permite configuração e interação por aplicativo. Composto por uma ANM 24 NET, uma SIR 1000, dois XAC 4000, dois XAS 4010 Smart e um IVP 4000 Smart. Através do aplicativo AMT Remoto Mobile, é possível fazer o cadastro facilitado dos controles e sensores, bem como alterar configurações do sistema.',
				},
				{
					img: p2alarme,
					title: 'Sistema de alarme sem fio - Kit 8000 Slim',
					content:
						'Com o melhor custo-benefício, o sistema é totalmente sem fios, o que garante fácil instalação e longo alcance de transmissão. Composto por uma AMT 8000, uma XSS 8000, um XAC 8000, um IVP 8000 PET e dois XAS 8000. Com alta performance de comunicação, os dispositivos possuem bateria com duração de até 5 anos.',
				},
				{
					img: p3alarme,
					title: 'Central de cerca elétrica ELC 5001',
					content:
						'A central ELC 5001 da Intelbras é ideal para residências de menor porte, entregando muita potência de choque ao menor preço da categoria. Pelo smartphone, monitore o disparo do eletrificador e receba o status no dispositivo quando interligado à central de alarme (via cabo ou TX 4020)',
				},
			],
			beneficios: [
				{
					img: b1alarme,
					title: 'Notificações instantâneas',
					content:
						'Com a notificação instantânea, você receberá um alerta imediato sempre que o alarme for ativado, permitindo que você tome medidas imediatas para garantir a segurança de sua propriedade.',
				},
				{
					img: b2alarme,
					title: 'Baixa manutenção',
					content:
						'A maioria dos sistemas de alarme da Intelbras não requer manutenção frequente, tornando-os uma solução de segurança de baixa manutenção.',
				},
				{
					img: b3alarme,
					title: 'Monitoramento remoto',
					content:
						'Com a opção de monitoramento remoto, você pode ficar de olho em sua propriedade de qualquer lugar, através de seu smartphone ou tablet, e receber alertas de atividade suspeita.',
				},
				{
					img: b4alarme,
					title: 'Proteção contra roubo e invasão',
					content:
						'Os sistemas de alarme da Intelbras fornecem proteção contra intrusos e podem alertá-lo imediatamente se alguém tentar invadir sua casa ou empresa.',
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
					headLine={'Conheça nossas soluções para Sistemas de Alarme'}
					subHeadLine={
						'Proteja o que é importante para você com um sistema de alarme da Intelbras. Entre em contato conosco agora e descubra como podemos proteger você e sua família.'
					}
				/>
				<SliderProducts data={GeneralData.alarme.produtos} />
				<SectionBenefit data={GeneralData.alarme.beneficios} />
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
