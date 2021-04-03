const mostrarProps = require("./helper");

const helper = {
  "!calcinha": "Christian de calzinha meeeooo",
  "!bory": "EU VOCÊ E O BORY, mano!!!!!!!!",
  "!transadinha": "SÓ UMA MANO, SÓ UMA TRANSADINHA",
  "bom dia": "Bom dia Pedrão",
  "boa tarde": "Boa tarde Pedrão",
  "boa noite": "Boa noite Pedrão",
  "!xandao": "Xandão é o ser mais energizado do mundo meeeooo",
  "!kim": "Famoso Kina betch",
  "!diogo": "Famoso diogo diogando",
  "!patonana": "Famoso sakin sakin sakin",
  "!pacheco": "Famoso busca longe",
  "!dodoidacabeca":('ola o dodoi da cabeça', { files: ['./src/assets/images/dodoi-da-cabeca.jpg'] }),
  "!gostosa": ('Olha a gostosa', { files: ['./src/assets/images/gostosa.jpg'] }),
};

const Helper = mostrarProps(helper, "")

const strategy = (profile) => helper[profile];

module.exports = {
  Helper,
  strategy
};
