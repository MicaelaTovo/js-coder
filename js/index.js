let contenedor = document.getElementById("container");
let contenedorSelect = document.getElementById("containerSelec");
let seleccionados = [];

// Funciones en orden de ejecucion
cargarSeleccionados();
mostrarViandas();
mostrarSeleccionados();


function cargarSeleccionados (){
if (localStorage.getItem("StorageSeleccionados" !== null)){
   seleccionados = JSON.parse(localStorage.getItem("StorageSeleccionados"));
   return;
} else {
  localStorage.setItem("StorageSeleccionados", JSON.stringify(seleccionados));
  return;
}
}

function mostrarViandas(){
  viandas.forEach((viandas) => {
    contenedor.innerHTML +=`
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${viandas.id} ${viandas.vianda} </div>
  <div class="card-body">
    <h5 class="card-title">${viandas.precio}</h5>
    <p class="card-text">texto</p>
    <button onClick="viandaSeleccionada(${viandas.id})" class="btn btn-outline-success">Quiero!</button>
  </div>
</div>`
  });
}

function mostrarSeleccionados(){
  seleccionados.forEach((seleccionados) => {
    contenedorSelect.innerHTML +=`
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${seleccionados.id} ${seleccionados.vianda} </div>
  <div class="card-body">
    <h5 class="card-title">${seleccionados.precio}</h5>
    <p class="card-text">texto</p>
    <button onClick=" quitarSeleccionados (${seleccionados.id})" class="btn btn-outline-success">No quiero!</button>
  </div>
</div>`
 }
 );
}

function viandaSeleccionada(id){
  let indice = id-1;
  let viandaSeleccionada = {};
  viandaSeleccionada = viandas [indice];

  if (!seleccionados.some(e=>e.id==id)){
    seleccionados.push(viandaSeleccionada);
    localStorage.setItem("StorageSeleccionados", JSON.stringify(seleccionados));
    location.reload();
  } else {
    alert ("ya agregaste esta vianda")
  }
  
}

function quitarSeleccionados(id) {
  let seleccionadosFiltrado = seleccionados.filter(e=> e.id != id);
  seleccionados = seleccionadosFiltrado;
  localStorage.setItem("StorageSeleccionados", JSON.stringify(seleccionados));
  console.log(seleccionadosFiltrado);
  location.reload();
}












// let formulario = document.getElementById("formulario");
// formulario.addEventListener('submit', formularioEnviado);

// function formularioEnviado(e){
//   e.preventDefault();
//   alert ("El formulario ha sido enviado correctamente");
// }


// let campo1 = document.getElementById("nombre");
// campo1.onclick = () => {console.log ('hicieron click en el campo nombre')};

// let campo2 = document.getElementById("apellido");
// campo2.onkeydown = () => {console.log('tecla apretada en campo apellido')};


// let form = document.getElementById("fielset");
// let newInput = document.createElement("reset");
// newInput.innerHTML = `<input type="reset" value="Borrar">`;
// form.append(newInput);









// trabajos anteriores / pruebas


// let contenedor = document.getElementById("container");
// let contenedor_selec = document.getElementById("container_selec");
// let seleccionados = [];




/*class Viandas{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
  Valores(){
    return ("El pack " + this.nombre + " tiene un valor de $ " + this.precio);
  }
}

const vianda1 = new Viandas("veggie", 1500);
const vianda2 = new Viandas("proteico", 1800);
const vianda3 = new Viandas("keto", 1900);
const vianda4 = new Viandas("gourmet", 2100);

let packs = ['veggie', 'proteico', 'keto', 'gourmet'];
let carrito = [];
let compra = +(prompt("Desea comprar un pack de viandas?\n 1-SI\n 2-NO"));
let entrada = undefined;

function verViandas(){
  entrada = +(prompt(`Marca el numero del pack a comprar: \n 
  1-${vianda1.Valores()} \n 
  2-${vianda2.Valores()} \n 
  3-${vianda3.Valores()} \n 
  4-${vianda4.Valores()}`));

}

if (compra===1){
  verViandas();
}else if (compra ===2){ 
  alert ("Hasta Pronto!")
} else{
  alert("Opcion invalida");
  +(prompt("Desea comprar un pack de viandas?\n 1-SI\n 2-NO"));
  verViandas();
}

function agregarPack (){
packs.forEach((producto, index)=>{
  if(entrada==index){
    carrito.push(producto);
    console.log (carrito);
  }
 })
}

if (entrada <=4){
  let agregar = +(prompt("Quiere agregar algun otro pack? \n 1-SI\n 2-NO"));
  if (agregar ===1){
    agregarPack();
    verViandas();
    agregarPack();
    alert("Usted agrego los packs " + carrito);
  }else{
    agregarPack();
    alert("Usted agrego el pack " + carrito);
  }
  }*/