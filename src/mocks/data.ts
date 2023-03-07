import b1Inst from '../assets/institucional-imgs/benefits/b1.svg';
import b2Inst from '../assets/institucional-imgs/benefits/b2.svg';
import b3Inst from '../assets/institucional-imgs/benefits/b3.svg';
import b4Inst from '../assets/institucional-imgs/benefits/b4.svg';
import cftv from '../assets/institucional-imgs/solutions/cftv.svg';
import rede from '../assets/institucional-imgs/solutions/rede.svg';
import smartHome from '../assets/institucional-imgs/solutions/smart.svg';
import alarme from '../assets/institucional-imgs/solutions/alarme.svg';
import acesso from '../assets/institucional-imgs/solutions/acesso.svg';
import telefonia from '../assets/institucional-imgs/solutions/telefonia.svg';
import solar from '../assets/institucional-imgs/solutions/solar.svg';
import b1cftv from '../assets/cftv-imgs/beneficios/b1.svg';
import b2cftv from '../assets/cftv-imgs/beneficios/b2.svg';
import b3cftv from '../assets/cftv-imgs/beneficios/b3.svg';
import b4cftv from '../assets/cftv-imgs/beneficios/b4.svg';
import p1cftv from '../assets/cftv-imgs/produtos/p1.svg';

export const GeneralData = {
	rede: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	alarme: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	smartHome: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	tel: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	acesso: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	solar: {
		produtos: {
			imgs: [],
			title: [],
			content: [],
		},
		beneficios: {
			imgs: [],
			title: [],
			content: [],
		},
	},
	cftv: {
		produtos: [
			{
				img: p1cftv,
				title: 'Kit CFTV 4 Canais Coaxial',
				content:
					'Um kit CFTV coaxial de 4 canais é composto por um DVR (gravador de vídeo digital) e 4 câmeras de segurança com tecnologia coaxial. O DVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, esse tipo de kit é ideal para monitorar ambientes de médio porte, como residências e pequenas empresas, com um sistema de segurança simples e eficiente.',
			},
			{
				img: p1cftv,
				title: 'Kit CFTV 4 Canais POE',
				content:
					'Um kit CFTV IP PoE de 4 canais é composto por um NVR (gravador de vídeo em rede) e 4 câmeras de segurança com tecnologia IP, que se conectam à rede por meio de cabos Ethernet e utilizam a tecnologia PoE (Power over Ethernet) para alimentação. O NVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, permitindo o acesso às gravações a qualquer momento.',
			},

			{
				img: p1cftv,
				title: 'Kit CFTV 4 Canais IP WIFI',
				content:
					'Um kit CFTV IP Wi-Fi de 4 canais é composto por um NVR (gravador de vídeo em rede) e 4 câmeras de segurança com tecnologia IP, que se conectam à rede sem fio por meio de Wi-Fi. O NVR é capaz de gravar as imagens captadas pelas câmeras e armazená-las em um disco rígido interno, permitindo o acesso às gravações a qualquer momento. Esse tipo de kit oferece flexibilidade e facilidade na instalação.',
			},
			{
				img: p1cftv,
				title: 'Kit CFTV 8 Canais Coaxial',
				content: [],
			},
		],
		beneficios: [
			{
				img: b1cftv,
				title: 'Maior segurança',
				content:
					'Com câmeras posicionadas estrategicamente, é possível monitorar o ambiente em tempo real, o que ajuda a inibir a ação de criminosos e a detectar possíveis invasões ou roubos.',
			},
			{
				img: b2cftv,
				title: 'Acesso remoto',
				content:
					'Muitos kits de CFTV permitem o acesso remoto às imagens capturadas pelas câmeras, o que significa que você pode monitorar sua casa ou empresa de qualquer lugar do mundo, através do seu smartphone ou computador.',
			},
			{
				img: b3cftv,
				title: 'Redução de custos',
				content:
					'Com o kit de CFTV, você pode economizar dinheiro em segurança, pois não será necessário contratar vigilantes ou serviços de monitoramento remoto.',
			},
			{
				img: b4cftv,
				title: 'Monitoramento 24 horas',
				content:
					'Com as câmeras de segurança instaladas, é possível monitorar o local 24 horas por dia, 7 dias por semana, o que aumenta a proteção da sua casa ou empresa durante o dia e à noite.',
			},
		],
	},
	institucional: {
		beneficios: [
			{
				img: b1Inst,
				title: 'Soluções escaláveis',
				content:
					'Oferecemos soluções escaláveis que crescem com sua empresa, sem comprometer a qualidade ou a segurança.',
				direction: 'row',
			},
			{
				img: b2Inst,
				title: 'Logística eficiente',
				content:
					'Com nossa logística eficiente, entregamos seus equipamentos rapidamente e garantimos que eles cheguem em perfeitas condições',
				direction: 'row-reverse',
			},
			{
				img: b3Inst,
				title: 'Parceria estratégica',
				content:
					'Somos parceiros estratégicos de sua empresa, oferecendo soluções personalizadas e suporte técnico para garantir que sua rede e segurança estejam em pleno funcionamento',
				direction: 'row',
			},
			{
				img: b4Inst,
				title: 'Preço justo',
				content:
					'Oferecemos preços justos e competitivos, para que sua empresa possa obter as soluções necessárias sem ultrapassar seu orçamento.',
				direction: 'row-reverse',
			},
		],
	},
};

export const SolutionsSliderData = [
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
		title: 'Soluções de Automação Smart',
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

export const DataNavigation = {
	items: [
		{
			link: '#home',
			navItem: 'Home',
		},
		{
			link: '#benefits',
			navItem: 'Benefícios',
		},
		,
		{
			link: '#solutions',
			navItem: 'Soluções',
		},
		,
		{
			link: '#who',
			navItem: 'Quem Somos',
		},
		,
		{
			link: '#findUs',
			navItem: 'Nos Encontre',
		},
	],
};

export const DataNavigationLP = {
	items: [
		{
			link: '#home',
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
