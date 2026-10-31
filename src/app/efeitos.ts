// liga/desliga de cada efeito. false = some só aquele efeito.
// o código de cada um fica em src/app/fx/ e nas classes "fx-" do globals.css
export const efeitos = {
  heroEntrada: true, // título do hero entra palavra por palavra
  heroFoto: true, // foto do hero com zoom lento (e rotação se tiver mais de uma foto)
  fundoOrganico: false, // manchas coloridas se mexendo no fundo
  curvas: true, // ondas entre as seções
  contadores: true, // números que sobem
  hoverCards: true, // ícone dos cards reage ao mouse
  parallax: true, // foto do mural anda mais devagar que o texto
  barraLeitura: true, // barrinha de progresso na página Sobre nós
  pulsoBotao: true, // botão "Quero ajudar" pulsa de vez em quando
  pixCheck: true, // botão do Pix vira "copiado" com check
  iconesTimeline: true, // ícone próprio em cada marco da linha do tempo
  vidaQueroAjudar: true, // página Quero ajudar: entrada, manchas, ondas e cards animados
  cardExpande: true, // cards de "Nossa atuação" crescem no hover (em vez do ícone)
  avisoDigitado: true, // aviso amarelo do Quero ajudar é digitado, com cursor piscando
  carrosselMantidos: true, // "Como somos mantidos" vira carrossel (false = grade de cards)
  arvore: true, // tronco no canto esquerdo da página inicial, com galhos que nascem ao rolar
} as const;

// pra rotacionar, é só colocar mais fotos aqui (idealmente quadradas, 768px ou mais)
export const fotosHero = [
  { src: "/hero-educacao.jpg", alt: "Crianças aprendendo e brincando juntas em uma sala de aula" },
];

export const fx = (ligado: boolean, classe: string) => (ligado ? classe : "");
