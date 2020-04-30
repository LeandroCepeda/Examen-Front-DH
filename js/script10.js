window.addEventListener( // NO TOCAR
  'load',  // NO TOCAR
  function () // NO TOCAR
  { // NO TOCAR


    // 10.1)
    // ESCRIBIR AQUI
    let Producto = {
      nombre: 'laptop',
      codigo: '123abc',
      tieneDescuento: true,
      descuento: 0.1,
      especificacionesTecnicas: ["procesador i9 9th", "32gb ram ddr5", "ssd 1tb", "usb tipo c"]
    }





    // 10.2)
    // ESCRIBIR AQUI
    Producto.encender = function () {
      return `el ${Producto.nombre} está encendiendo`;
    }





    // 10.3)
    // ESCRIBIR AQUI
    Producto.nuevaEspecificacionTecnica = function (especificacionTecnica) {
      Producto.especificacionesTecnicas.push(especificacionTecnica);
    }





    // 10.4)
    // ESCRIBIR AQUI
    Producto.nuevaEspecificacionTecnica("placa gráfica NVIDIA");
    mostrarProducto(Producto, true);













  }// NO TOCAR
);// NO TOCAR
