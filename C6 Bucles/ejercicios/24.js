function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
const stringInvertido = texto.split ("").reverse().join ("");
return stringInvertido;



}
module.exports = invertirTexto;
