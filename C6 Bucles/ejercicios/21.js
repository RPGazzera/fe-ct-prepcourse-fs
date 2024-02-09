function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let resultado = numero;
  while (resultado > 1) {
  if (resultado % 2 !== 0) {
    return (false);
    } 
    resultado /= 2;
    }
    return (resultado ===1);
    }


module.exports = esPotenciaDeDos;
