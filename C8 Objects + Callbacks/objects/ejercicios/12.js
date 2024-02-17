function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  if (objetoMisterioso.hasOwnProperty('numeroMisterioso') && typeof objetoMisterioso.numeroMisterioso === 'number') {
    return objetoMisterioso.numeroMisterioso * 5;
  } else {
    return null;
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
