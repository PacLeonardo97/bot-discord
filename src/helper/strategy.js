import mostrarProps from "./helper";

const rand_imgs_guigui = [
  './src/assets/images/guigui/guigui1.jpg',
  './src/assets/images/guigui/guigui2.jpg',
  './src/assets/images/guigui/guigui3.jpg',
  './src/assets/images/guigui/guigui4.jpg',
  './src/assets/images/guigui/guigui5.jpg',
]

const helper = {
  "!calcinha": "Christian de calzinha meeeooo",
  "!bory": "EU VOCÊ E O BORY, mano!!!!!!!!",
  "!transadinha": "SÓ UMA MANO, SÓ UMA TRANSADINHA",
  "!bom dia": "Bom dia Pedrão",
  "!xandao": "Xandão é o ser mais energizado do mundo meeeooo",
  "!kim": "Famoso Kina betch",
  "!diogo": "Famoso diogo diogando",
  "!patonana": "Famoso sakin sakin sakin",
  "!pacheco": "Famoso busca longe",
  // "!guigui": ("Olha o guegue", { files: [rand_imgs_guigui[Math.floor(Math.random() * rand_imgs_guigui.length)]] }),
  "!dodoidacabeca":('ola o dodoi da cabeça', { files: ['./src/assets/images/dodoi-da-cabeca.jpg'] }),
  "!gostosa": ('Olha a gostosa', { files: ['./src/assets/images/gostosa.jpg'] }),
};

export const Helper = mostrarProps(helper, "");

const strategy = (profile) => helper[profile];

export default strategy;
