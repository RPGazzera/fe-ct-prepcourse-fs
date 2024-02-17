const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
};
  const miObjeto = { nombre: 'Juan', edad: 30 };
  const objetoModificado = agregarNuevaPropiedad(miObjeto, 'profesion', 'Ingeniero');
  console.log(objetoModificado);
  

module.exports = agregarNuevaPropiedad;
