function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
    if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
      let mesesEncontrados = array.filter(mes => mes === "Enero" || mes === "Marzo" || mes === "Noviembre");
      return mesesEncontrados;
      } else {
      return "No se encontraron los meses pedidos";
}
}

module.exports = mesesDelAño;
