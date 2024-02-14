function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = {};
  for (let i = 0; i < numeros.length; i++) {
    const elemento = numeros[i];
    if (elementosVistos[elemento]) {
      return elemento;
    } else {
      elementosVistos[elemento] = true;
    }
}
}
module.exports = encontrarElementoRepetido;