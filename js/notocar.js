function mostrarProducto
(
  Producto,
  booleano
)
{
  var especificacionesTecnicas = "";
  var texto = "";
  for ( var atributo in Producto ) {
    if ( Producto.hasOwnProperty( atributo ) )
    {
        if ( atributo == "nombre" )
        {
            // alert(atributo);
            texto += "Has creado el producto de nombre <span style='font-size: 2rem; color: blue;'>" +  Producto.nombre + "</span>.";
            texto += "<br>";
        }
        else if ( atributo == "codigo" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Le has asignado como código de producto el: <span style='font-size: 2rem; color: blue;'>" +  Producto.codigo + "</span>.";
            texto += "<br>";
        }
        else if ( atributo == "tieneDescuento" )
        {
            // alert(atributo);
            texto += "<br>";
            if ( Producto.tieneDescuento === true )
            {
                texto += "Éste producto <span style='font-size: 2rem; color: blue;'> tiene </span> descuento!";
            }
            else if ( Producto.tieneDescuento === false )
            {
                texto += "Que pena, el producto no tiene <span style='font-size: 2rem; color: blue;'> descuento </span>!";
            }
            texto += "<br>";
        }
        else if ( atributo == "descuento")
        {
          // alert(atributo);
          if (Producto.tieneDescuento)
          {
            texto += "<br>";
            texto += "El descuento es del: <span style='font-size: 2rem; color: blue;'>" + Producto.descuento + "</span>%.";
            texto += "<br>";
          }
        }
        else if ( atributo == "especificacionesTecnicas" )
        {
          if ( booleano )
          {
            // alert(atributo);
            for ( var i = 0; i < Producto.especificacionesTecnicas.length; i++ )
            {
              if ( i+1 < Producto.especificacionesTecnicas.length )
              {
                especificacionesTecnicas += Producto.especificacionesTecnicas[i] + ", ";
              }
              else
              {
                especificacionesTecnicas += Producto.especificacionesTecnicas[i] + ".";
              }
            }
            // alert(hobbies);
            texto += "<br><br>";
            texto += "Especifiaciones técnicas del producto: ";
            texto += "<br>";
            texto += "<span style='font-size: 2rem; color: blue;'>" + especificacionesTecnicas + "</span>";
            texto += "<br>";
          }
        }
        else if ( atributo == "encender" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Si escribiste correctamente el método <span style='font-size: 2rem; color: blue;'> encender </span>, deberías ver impreso en la consola: 'el producto "+ Producto.nombre+" está encendiendo.'";
            console.log( Producto.encender() );
            texto += "<br>";
        }
        else if ( atributo == "nuevaEspecificacionTecnica" )
        {
            // alert(atributo);
            texto += "<br>";
            texto += "Si escribiste correctamente el método <span style='font-size: 2rem; color: blue;'> nuevaEspecificacionTecnica </span>, invocándolo deberías poder agregar especifiaciones técnicas. ";
            texto += "<br>";
        }
        else
        {
            alert("El atributo o metodo : '" + atributo + "' es incorrecto.");
        }
    }
  }
  // alert(texto);
  document.querySelector("#usuario").innerHTML = texto;
  document.querySelector('#js-2').style.backgroundColor = "gainsboro";
  document.querySelector('#js-2').style.textAlign = "center";
  document.querySelector('#js-2').style.padding = "100px 25px";
};
