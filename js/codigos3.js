let imc2 ;
let texto;
let canasta;
let usuariosTotalesEnES
let numeroIngresos;
let usuariosTotales = [];
let bajarPeso;
class Usuario{
    constructor (nombre, apellido, edad, genero, altura, peso){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.genero = genero;
this.altura = altura;
this.peso = peso;
    }
}
function agregar() {
    return  usuariosTotales.push();
}
function imc(a,b){
    return  (a/(b*b));
}
let campoNombre = document.getElementById("nombre");
let campoApellido = document.getElementById("apellido");
let campoEdad = document.getElementById("edad");
let campoGenero = document.getElementById("genero");
let campoAltura = document.getElementById("altura");
let campoPeso = document.getElementById("peso");




/*primer renderizado*/
/*es importante validar que el storage no este vacío ya que usamos la clave para iniciar por lo que si esta vacio debe iniciar en cero el arreglo*/
//if(localStorage.getItem('usuariosTotalesEnES') !== undefined && localStorage.getItem('usuariosTotalesEnES')){  
    // se fija si hay datos en el storage los agrega en el arreglo , si no hay datos pone el arreglo como vacio 
  //  usuariosTotales= JSON.parse(localStorage.getItem('usuariosTotalesEnES'));
 /*}
else {*/
  //  usuariosTotales = [];
/*}
/*verificando las variables y la longitud del arreglo*/
/*console.log(usuariosTotales);
console.log(usuariosTotales.length);*/
/*}*/






/*evento sobre un botón */
let boton1= document.getElementById("boton1");
boton1.className= "border rounded-pill btn btn-primary";
/*validación de campos*/
campoEdad.onchange = () => {
if ((campoEdad.value) <=1 || (campoEdad.value >= 120)){
//sweetalert
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado de Edad',
    footer: 'Edad entre 1 y 120 años'
  })
campoEdad.value =""
}
};

campoAltura.onchange = () => {
    if ((campoAltura.value) <=0.5 || (campoAltura.value > 2.50)){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado de altura',
    footer: 'altura permitida entre 0.5 y 2.50 metros'
  })
    campoAltura.value =""
    return false;
    }
}
campoPeso.onchange =()=>{
    if((campoPeso.value <=30) || (campoPeso.value >= 300)){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'debe ingresar un valor adecuado para el peso',
    footer: 'peso permitido entre 30 y 300 kilogramos'
})
    campoPeso.value =""
    return false;
}
};
/*primera validación de campo nombre y apellido*/
campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black"; 
    }
    else{
        campoNombre.style.color="red";
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Nombre no debe comenzar con número',
    footer: ''
})
        campoNombre.value="";
}
};
campoApellido.oninput=()=>{
    if(isNaN(campoApellido.value)){
        campoApellido.style.color="black";
    }
    else{campoApellido.style.color="red";
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Apellido no debe comenzar con número',
    footer: ''
})
    campoApellido.value="";
}
}

boton1.onclick =() => {
 

  /*aplicando dom para insertar una imagen*/
/*  imagen = document.getElementById("formas");
imagen.className = "container";
imagen.innerHTML= `
<img  src="./imagenes/imagen.gif" alt="figura trotando" class="card-img-top">;
`;*/
   if((campoNombre.value == "") || (campoApellido.value == "")|| (campoEdad.value == "") || (campoPeso.value == "")){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Debe llenar todos los campos',
    footer: ''
    })
    return true

   } else{
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'sus datos han sido entrados correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  
//POST
function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
const nuevoPost={
    nombre:campoNombre.value,
    apellido: campoApellido.value,
    edad: campoEdad.value,
    genero: campoGenero.value,
    altura: campoAltura.value,
    peso: campoPeso.value
}
fetch(URLPOST,{
    method: "POST",
    body:JSON.stringify(nuevoPost),
    headers:{'Content-type': 'application/json; charset=UTF-8'}
})
    .then(respuesta => respuesta.json())
    .then(datosRetorno =>{
        console.log("lo que retorna json placeholder al post");
        console.log(datosRetorno);
    })
    
}

 //GET
 /*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
	}
};

fetch('https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/
   
   //creando el arreglo con los datos del "usuario"
        nombre = campoNombre.value.toUpperCase();
        apellido = campoApellido.value.toUpperCase();
        edad = parseInt(campoEdad.value);
        genero = campoGenero.value;
        altura = parseFloat(campoAltura.value);
        peso = parseFloat(campoPeso.value);
        const usuario = new Usuario (this.nombre, this.apellido, this.edad, this.genero, this.altura, this.peso);
        console.log(usuario);
    //guardando al storage los datos del "usuario"
        localStorage.setItem("elUsuario",JSON.stringify(usuario));
   
    //calculo del IMC
        let imc2 = imc(peso,altura);
    //tomando via DOM el div donde se presenta el resultado del IMC 
        let resultado = document.getElementById("res");
    //arreglo literales que se usará para la venta de productos
        let bajarPeso= [
        {
        codigo:001,
        nombre: "Belly Trim",
        imagen: "./imagenes/bajar_peso/bellytrim.jpg",
        descripcion: "Producto diseñado para quemar calorias extas",
        precio: 10.80
        },
        {
        codigo:002,
        nombre: "Faja Reductora",
        imagen: "./imagenes/bajar_peso/fajaReductora.jpg",
        descripcion: "Elaborada de las mas finas fibras sinteticas",
        precio: 15.99
        },
        {
        codigo:003,
        nombre: "Magic Slim",
        imagen: "./imagenes/bajar_peso/magicSlim.jpg",
        descripcion: "Totalmente a base de hierbas y sabor natural",
        precio: 15.78
        },
        {
        codigo:004,
        nombre: "Pancea Plus",
        imagen: "./imagenes/bajar_peso/panceaPlus.jpg",
        descripcion: "Le garantiza reducir centimetros de cintura",
        precio: 20.80
        }
        ];
        let mantenerPeso =[
        {
        codigo:001,
        nombre: "Aceite Corporal",
        imagen: "./imagenes/mantener_peso/aceiteCorporal.jpg",
        descripcion: "fino extracto de aceites esenciales para la piel",
        precio: 18.30
        },
        {
        codigo:002,
        nombre: "Crema Hidratante",
        imagen: "./imagenes/mantener_peso/cremaHidratante.jpg",
        descripcion: "Sensación única de frescura y tonifica la piel",
        precio: 38.90
        },
        {           
        codigo:003,
        nombre: "Loción Corporal",
        imagen: "./imagenes/mantener_peso/locionCorporal.jpg",
        descripcion: "Diseñada especialmente para nutrir pieles Ph neutro",
        precio: 25.30 
        },
        {
        codigo:004,
        nombre: "Figura Perfecta",
        imagen: "./imagenes/mantener_peso/figuraPerfecta.jpg",
        descripcion: "El uso diario le permite mantener su figura",
        precio: 58.30 
        }
        ];
        let subirPeso = [
        {
        codigo:001,
        nombre: "Cardarine",
        imagen: "./imagenes/subir_peso/cardarine.jpg",
        descripcion: "Fortalece sistema inmune y estimula la musculatura",
        precio: 68.30 
        },
        {
        codigo:002,
        nombre: "Creatina",
        imagen: "./imagenes/subir_peso/creatina.jpg",
        descripcion: "Aumente la energía para rutinas de entrenamiento vigorosas",
        precio: 38.30
        },
        {
        codigo:003,
        nombre: "Ganador de Peso",
        imagen: "./imagenes/subir_peso/ganadorPeso.jpg",
        descripcion: "Estimula la formción de masa muscular",
        precio: 108.90 
        },
        {
        codigo:004,
        nombre: "Premium Blend",
        imagen: "./imagenes/subir_peso/premiumBlend.jpg",
        descripcion: "Suplemento diario garantiza energía y proteinas",
        precio: 85.00 
        },
        ];
//FIN DE ARREGLOS PARA LA VENTA

/*condicionando la venta dependiendo del resultado del IMC y preparando el carrito*/
    let ventas;
    let respuesta;
    let respuesta2;
    carrito =() => {
        if (imc2 <= 18.5){
            respuesta = " tiene bajo peso";
            respuesta2 = "Tenemos los mejores productos para mejorar su condición"
            ventas = subirPeso
            return ventas
            }
            else if ((imc2 >=18.5) && (imc2 <= 24.9)){
            respuesta = "tiene peso normal";
            respuesta2 = "Tenemos los mejores productos para mantener su condición"
            ventas = mantenerPeso
            return ventas
            }
            else if ((imc2 >= 25.0) && (imc2 <= 29.9)){
            respuesta = "tiene sobre peso";
            respuesta2 = "Tenemos los mejores productos para mejorar su condición"
            ventas = bajarPeso
            return ventas
            }
            else {
            respuesta= "esta fuera de rango, debe consultar un especialista";
            respuesta2 = ""
            ventas = [];
            prueba = 0
            }               
            };   
    prueba =carrito();       
    console.log(ventas);   
    console.log(respuesta); 
    console.log(prueba) 
    //presenando el resultado del IMC
    resultado.innerHTML = `
    <div class="row margen">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body margen">
            <h5 class="card-title">Su IMC es de  ${imc2.toFixed(2)}</h5>
            <h6> De acuerdo a su IMC, Usted    ${respuesta}
            <p> Si quiere conocer mas detalles de su condición, presione el Botón "Detalles". </p>       
                <p id="text" class="card-text"></p>
                <a href="https://lifestyle.fit/salud/habitos-saludables/imc-hombre-mujer" class="btn btn-primary">Detalles</a>
          </div>
        </div>
    </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body margen" id="prue">
            <h5 class="card-title">${respuesta}</h5> 
            <p class="card-text"> ${respuesta2}, </p>
            </div>
          </div>
        </div>
    </div>`;     
  /*renderizando las cartas de productos a vender de acuerdo al valor obtenido de imc*/
   /* let canasta =[];*/

    let publicidad = document.getElementById("presentaProductos");
   console.log(prueba)
   
     function presentarProductos(){
         
         for(const producto of prueba){
             publicidad.innerHTML += `
             <div class="card col-sm-2 margen">
                 <img src="${producto.imagen}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${producto.nombre}</h5>
                     <h6 class="fs-6">${producto.codigo}</h6>
                     <p class="card-text">${producto.descripcion}</p>
                     <h6 class="card-title"> $ ${producto.precio}</h6>
                     <button id="btn${producto.codigo}" class="btn btn-primary">Comprar<button>
                 </div>
             </div>
             `;
         }
     }
     presentarProductos();
   //recuperando el carrito del storage  
 
  let canasta = JSON.parse(localStorage.getItem("suCarrito")) || [];
  
 (canasta.length != 0)&& dibujaTabla();
 function dibujaTabla(){
  
 for(const producto of canasta){
     document.getElementById("contenidoTabla").innerHTML += `
     <tr>
         <td> ${producto.codigo}</td>
         <td> ${producto.nombre}</td>
         <td> ${producto.precio}</td>
         <td> <button class="btn btn-light" onclick="eliminar(event)"> X </button></td>
         </tr>
     
     `;
 }
 totalCarrito = canasta.reduce((acumulador, prod)=>acumulador + prod.precio,0)
 console.log(totalCarrito)
 document.getElementById("total").innerText= "Total a pagar $:  "+ totalCarrito.toFixed(2);
 };
 prueba.forEach((producto) => {
 document.getElementById(`btn${producto.codigo}`).addEventListener("click", function(){
     agregarAlCarrito(producto)
 });
 
 });
 
 function agregarAlCarrito(productoAComprar){
 canasta.push(productoAComprar);
 console.table(canasta);
 
 
 Swal.fire({
     title: productoAComprar.nombre,
     text: "se agregó al carrito",
     imageUrl: productoAComprar.imagen,
     imageWidth: 200,
     imageHeight: 200,
     imageAlt: productoAComprar.nombre,
   })
 document.getElementById("contenidoTabla").innerHTML += `
 <tr>
     <td> ${productoAComprar.codigo}</td>
     <td> ${productoAComprar.nombre}</td>
     <td> ${productoAComprar.precio}</td>
     <td> <button class="btn btn-light" onclick="eliminar(event)"> X </button></td>
     </tr>
 
 `;
 
 //guardar el carrito en el storage
 /*canastaStorage = canasta;
 console.log(canastaStorage);*/
 localStorage.setItem("suCarrito", JSON.stringify(canasta));
 let totalCarrito =canasta.reduce((acumulador, prod)=>acumulador + prod.precio,0);
 console.log(canasta);
 console.log(totalCarrito)
 document.getElementById("total").innerText= "Total a pagar $:  "+ totalCarrito.toFixed(2);
 }
 }};
 
 //para eliminar productos del carrito

 
 function eliminar(ev){
    console.log(canasta);
     console.log(ev);
     let fila = ev.target.parentElement.parentElement;
     console.log(fila);
     let codigo =fila.children[0].innerText;
     console.log(codigo);
     
     let indice = canasta.findIndex(producto => producto.codigo == codigo);
     console.log(indice)
     //remueve el producto del carrito
     canasta.splice(indice,1);
     console.table(canasta);
     //remueve la fila de la tabla
     fila.remove();
     //recalcular el total
     let totalCarrito = canasta.reduce((acumulador,prod)=>acumulador+prod.precio,0);
     document.getElementById("total").innerText= "Total a pagar $:  "+ totalCarrito.toFixed(2);
     localStorage.setItem("suCarrito",JSON.stringify(canasta));
     }
 
 let btnFinCompra = document.getElementById("realizarCompra") ;
 
 btnFinCompra.onclick = () => {
     Toastify({
         text: "Orden de Compra recibida",
         duration: 3000
         }).showToast();
  
  productoAComprar =[];
  document.getElementById("contenidoTabla").innerHTML ="";
  document.getElementById("total").innerText= "Total a pagar $:  ";
  localStorage.removeItem("suCarrito");
 

    }
