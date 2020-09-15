const mostrarProps = (obj, nomeDoObj) => {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += `${nomeDoObj} ${i} = ${obj[i]} \n\n `;
    }
  }
  return resultado;
};
export { mostrarProps as default, mostrarProps };
