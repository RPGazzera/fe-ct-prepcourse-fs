function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   const arr1 = str1.toLowerCase().split('');
   const arr2 = str2.toLowerCase().split('');
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();
  const sortedStr1 = sortedArr1.join('');
  const sortedStr2 = sortedArr2.join('');
  return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;
