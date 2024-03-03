function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  if (resultadosTest.length === 0) {
    return 0; 
  }
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i ++) {
suma += resultadosTest[i];
} 
let promedio = suma / resultadosTest.length;
return promedio;

}
module.exports = promedioResultadosTest;
