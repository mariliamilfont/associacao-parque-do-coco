export const contato = {
  email: "associacaoparquedococo@gmail.com",
  instagram: "@associacaoparquedococo",
  instagramUrl: "https://www.instagram.com/associacaoparquedococo/",
  telefone: "(85) 3267-5139",
  telefoneLink: "tel:+558532675139",
  pix: "08.169.558/0001-07",
  // banco costuma aceitar a chave CNPJ só com números
  pixCopia: "08169558000107",
};

const endereco = "R. Des. Leite Albuquerque, 1523 - Aldeota, Fortaleza - CE";

export const mapa = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`,
  link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`,
};

export const emailLink = `mailto:${contato.email}`;
