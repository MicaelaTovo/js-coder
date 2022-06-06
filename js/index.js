//conocer el valor total del producto segun el interes por cuotas

let precioProducto = +(prompt("ingrese el precio del producto a comprar"));
let cuotas = +(prompt("Desea realizarlo en 1, 3 o 6 cuotas?"));
let resultado = 0;

  
if (cuotas==1){
  resultado = precioProducto;
  alert ("Su producto quedara en un total de: $ " + precioProducto);
  continuar();
}
else if (cuotas==3){
  resultado = (precioProducto * 1.1);
  alert ("Su producto quedara en un total de: $ " + resultado);
  continuar();
}
  else if (cuotas==6){
    resultado = (precioProducto * 1.5);
    alert ("Su producto quedara en un total de: $" + resultado);
    continuar();
  }
  else {
    alert ("error");
  }

function continuar (){
  let continuar = +(prompt("Desea saber el valor de algun otro producto? 1-si / 2-no"));
  if (continuar == 1){
    alert ("presione f5");
  } else {
    alert ("puede cerrar esta ventana");
  }
  }
