function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  if (resultadosTest.length === 0) {
    return 0;
  }
  let sumaNotas = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  let promedio = sumaNotas / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
