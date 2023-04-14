import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper';
import acesso from '/assets/institucional-imgs/solutions/acesso.svg';
import alarme from '/assets/institucional-imgs/solutions/alarme.svg';
import cftv from '/assets/institucional-imgs/solutions/cftv.svg';
import rede from '/assets/institucional-imgs/solutions/rede.svg';
import smartHome from '/assets/institucional-imgs/solutions/smart.svg';
import solar from '/assets/institucional-imgs/solutions/solar.svg';
import telefonia from '/assets/institucional-imgs/solutions/telefonia.svg';
import { Slide, SliderComponent, SwiperProps } from '../GeneralSlider';

export default function SolutionsSlider() {
	const SolutionsSliderData = [
		{
			id: '/cftv',
			img: cftv,
			title: 'Soluções em CFTV',
			content:
				'CFTV (Circuito Fechado de Televisão) é um sistema de segurança eletrônica que permite monitorar e gravar imagens de um determinado local por meio de câmeras de segurança. É uma tecnologia amplamente utilizada em diversas áreas, como em empresas, comércios, residências e espaços públicos, para monitorar e registrar atividades, aumentando a segurança e prevenindo possíveis incidentes.',
		},
		{
			id: '/rede',
			img: rede,
			title: 'Soluções em REDE de internet',
			content:
				'Cabos de rede são componentes importantes para a conexão de dispositivos em uma rede de computadores. Esses cabos permitem a transmissão de dados entre dispositivos em alta velocidade, por meio de uma conexão física.Eles são compostos por fios de cobre, geralmente revestidos por isolantes de plástico, e vêm em diferentes comprimentos e padrões, como CAT5, CAT6, entre outros.',
		},
		{
			id: '/smartHome',
			img: smartHome,
			title: 'Soluções de Automação Residêncial',
			content:
				'São dispositivos que permitem a automação de funções e tarefas em uma casa ou apartamento, tornando a rotina do dia a dia mais prática e eficiente. Podem ser controlados por meio de dispositivos móveis, como smartphones e tablets, ou por assistentes virtuais, como a Alexa e o Google Assistant, permitindo que o usuário gerencie a iluminação, temperatura, segurança, entre outros recursos.',
		},
		{
			id: '/solar',
			img: solar,
			title: 'Soluções de Energia Solar',
			content:
				'Sistema de energia solar é uma tecnologia que permite a conversão da energia solar em eletricidade, por meio de painéis solares instalados em telhados ou em áreas abertas, que captam a radiação solar e a transformam em energia elétrica. Esse sistema é uma alternativa sustentável e econômica à energia elétrica convencional, pois é uma fonte limpa e renovável, não emite gases poluentes e pode gerar economia significativa na conta de luz. ',
		},
		{
			id: '/telefonia',
			img: telefonia,
			title: 'Soluções de Telefonia',
			content:
				'Os sistemas de telefonia podem ser utilizados em ambientes comerciais e residenciais, permitindo a comunicação entre funcionários, clientes, fornecedores, amigos e familiares. Eles são compostos por telefones, centrais telefônicas, roteadores, entre outros dispositivos, que permitem gerenciar as chamadas, transferir chamadas, realizar conferências, enviar e receber mensagens de voz e texto, e outros recursos.',
		},
		{
			id: '/acesso',
			img: acesso,
			title: 'Soluções de Controle de Acesso',
			content:
				'Controle de acesso é um sistema de segurança que permite gerenciar e controlar o acesso de pessoas a um determinado ambiente, como uma empresa, condomínio ou prédio residencial. O controle de acesso é uma medida importante para garantir a segurança e a privacidade de ambientes restritos, bem como para monitorar o fluxo de pessoas e aumentar a eficiência e organização em empresas e instituições.',
		},
		{
			id: '/alarme',
			img: alarme,
			title: 'Soluções de Sistemas de Alarme',
			content:
				'Sistemas de alarme são dispositivos que permitem monitorar e alertar a ocorrência de possíveis intrusões ou incidentes em um determinado ambiente. Eles são compostos por sensores de movimento, abertura, fumaça, entre outros, que detectam a presença de anomalias e enviam um sinal para uma central de monitoramento ou para o próprio usuário, por meio de um dispositivo móvel.',
		},
	];

	const settings: SwiperProps = {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 100,
		navigation: { enabled: true },
		autoplay: { delay: 4000, disableOnInteraction: false },
		pagination: { clickable: true },
		slidesPerView: 1,
	};
	return (
		<Flex
			maxW='1024px'
			align={'center'}
			justify='center'>
			<SliderComponent settings={settings}>
				{SolutionsSliderData.map((s) => {
					return (
						<Slide key={s.title}>
							<Flex
								gap={'24px'}
								flexDir={['column', 'column', 'column', 'row']}
								justify={'center'}
								align='center'>
								<Image
									borderRadius={'12px'}
									h={['180px', '180px', '180px', '220px']}
									src={s.img}
								/>
								<Flex
									justify={'center'}
									align={['center', 'center', 'center', 'normal']}
									flexDir={'column'}
									gap='12px'>
									<Heading fontSize={['md', 'lg', 'xl', '2xl']}>
										{s.title}
									</Heading>
									<Text
										display={['none', 'none', 'none', 'inline-block']}
										fontSize={'sm'}>
										{s.content}
									</Text>
									<Link to={`${s.id}`}>
										<Box
											maxW='420px'
											bg={'brand.verde.500'}
											borderRadius={'4px'}
											p='12px'
											fontWeight={'bold'}
											color={'brand.branco'}
											w={['240px', '240px', '240px', '100%']}
											textAlign='center'
											shadow={'lg'}
											cursor={'pointer'}
											transition={'all .3s ease'}
											_hover={{
												bgColor: 'brand.verde.primary',
											}}>
											<Text fontSize={'xl'}>Saiba Mais</Text>
										</Box>
									</Link>
								</Flex>
							</Flex>
						</Slide>
					);
				})}
			</SliderComponent>
		</Flex>
	);
}
