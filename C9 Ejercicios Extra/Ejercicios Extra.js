/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arregloResultante = [];
  for (var clave in objeto) { //itero sobre cada clave, valor
    if (objeto.hasOwnProperty(clave)) {
      var nuevoArreglo = [clave, objeto[clave]];
      arregloResultante.push(nuevoArreglo);
  }
}
return arregloResultante;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var resultado = {}; // como es un objeto, va entre corchetes
  for (var i = 0; i < string.length; i++) {
    var caracterActual = string[i];
    if (resultado[caracterActual]) {
      resultado[caracterActual]++; //si el caracter esta presente, aumenta el contador
    } else {
      resultado[caracterActual] = 1; //si no se repite, se queda en valor 1
    }
    }
    return resultado;
}


function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var caracteres = string.split("");
  var letrasMayusculas = caracteres.filter(char => char === char.toUpperCase());
  var letrasMinusculas = caracteres.filter(char => char === char.toLowerCase());
  return letrasMayusculas.join("") + letrasMinusculas.join("");
  }


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabras = frase.split(" "); //separo la frase en palabras
  let resultado = palabras.map(palabra => { //itero sobre cada palabra
    return palabra.split("").reverse().join(""); //las doy vuelta
  });
return resultado.join(" "); //las retorno todas dadas vuelta
  }



function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
 let numeroString = numero.toString();
 let numeroInvertido = numeroString.split('').reverse().join('');
 if (numeroString === numeroInvertido) {
  return "Es capicua";
} else {
  return "No es capicua";
}
}
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let caracteres = string.split("");
let resultado = caracteres.filter(char => char!== "a" && char !== "b" && char !== "c");
return resultado.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
 return arrayOfStrings.sort((a, b) => a.length - b.length);
 }

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  return array1.filter(numero => array2.includes(numero));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
