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
};

const mostrarProps = (obj, nomeDoObj) => {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "" + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
};
export const Helper = mostrarProps(helper, "");

const strategy = (profile) => helper[profile];

export default strategy;
