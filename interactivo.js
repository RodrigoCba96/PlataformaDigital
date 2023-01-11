//armado de stock de producto

class Producto {
  constructor(id,nombre,precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad= 1; 
  }
}

const Spiderman = new Producto(1, "Spiderman PC", 1500, "img/spidey.jpg");
const Batman = new Producto(2, "Batman Arkham City", 1000, "img/bat.jpg");
const Kratos = new Producto(3, "God Of War 4", 1200, "img/gow.jpg");
const Wz = new Producto(4, "Cod: Modern Warfare 2", 3000, "img/cod.jpg");
const Forhonor = new Producto(5, "For honor", 800, "img/forhonor.jpg");
const Dbz = new Producto(6, "Dragon Ball Z Kakarot", 1000, "img/dbz.jpg");


//ARRAY DE PRODUCTOS
                                           
const productos = [Spiderman, Batman, Kratos, Wz, Forhonor, Dbz];
console.log(productos);

let carrito = [];

 

// uso de DOM

const contenedorProductos = document.getElementById("contenedorProductos");
const mostrarProductos = () => {

  productos.forEach(Producto => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-4", "col-sm-12", "d-flex", "justify-content-center");
    card.innerHTML = `<div>
    <img src = "${Producto.img}" class = "card-img-top imgjuegos" alt= "${Producto.nombre}">
    <div class= "conteiner">
    <h1>${Producto.nombre}</h1>
    <h4>Precio: ${Producto.precio}$</h4>
    <p><button class = "boton" id = "btn${Producto.id}">Agregar al carrito</button></p>
    </div>
    </div>`
    contenedorProductos.appendChild(card);
  
    //AGREGADO DE PRODUCTOS A CARRO

    const btn = document.getElementById(`btn${Producto.id}`);
    btn.addEventListener("click", () => {
      agregarAlcarrito(Producto.id)


    })
    
  })
  }
 
  const agregarAlcarrito = (id) => {
    const productoEnCarrito = carrito.find(Producto => Producto.id === id);
    if(productoEnCarrito) {
      productoEnCarrito.cantidad++;
      console.log(productoEnCarrito)
    }
    else {
      const producto = productos.find(Producto => Producto.id === id);
      carrito.push(producto);

     //localstorage working

     localStorage.setItem("carrito", JSON.stringify(carrito));

     }

     calcularTotalidad();
    }

mostrarProductos();

//MOSTRAR CARRO DE COMPRAS

const changuito = document.getElementById("changuito")
const verChanguito= document.getElementById("verChanguito")

verChanguito.addEventListener("click", () => {
 mostrarChanguito(); 

})

//FUNCION PARA MOSTRAR CARRITO

const mostrarChanguito = () => {

changuito.innerHTML = "";

    carrito.forEach(Producto => {
    const card = document.createElement("div")
    card.classList.add("col-x1-3", "col-md-6", "col-xs-12");
    card.innerHTML = `
    <div>
    <img src = "${Producto.img}" class = "card-img-top imgjuegos" alt= "${Producto.nombre}">
    <div class= "conteiner">
    <h1>${Producto.nombre}</h1>
    <h4>Precio: ${Producto.precio}$</h4>
    <p>Cantidad: ${Producto.cantidad}</p>
    <button class = "boton" id = "Sacar${Producto.id}">Eliminar producto</button>
    </div>
    </div>`

  changuito.appendChild(card);
  

  //ELIMINAR PRODUCTOS

    const boton = document.getElementById(`Sacar${Producto.id}`);
    boton.addEventListener("click", () =>{
    eliminarDelChanguito(Producto.id)
  })

  })
calcularTotalidad();
}

  //FUNCTION PARA ELIMINAR PRODUCTO
  const eliminarDelChanguito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    
    mostrarChanguito();

    //localstorage working

    localStorage.setItem("carrito", JSON.stringify(carrito));

  }


  //VACIAR CARRITO
  const vaciarCarrito = document.getElementById("vaciarCarrito");
  vaciarCarrito.addEventListener("click", () => {
    eliminarCarritoTotal();
  })

  const eliminarCarritoTotal = () => {
    carrito = [];
    mostrarChanguito();

    //localstorage working
    localStorage.clear();

  }


//TOTAL DE LA COMPRA
const total = document.getElementById("Total");
const calcularTotalidad= () => {
  let totalCompra = 0;
  carrito.forEach(Producto => {
    totalCompra += Producto.precio * Producto.cantidad;

  })
  total.innerHTML= `Total: $${totalCompra}`;

}



  // EVENTO * - *BUTTON* 
const btn= document.getElementById("contenedorProductos");
btn.addEventListener("click", () => {
console.log("Agregado al carrito")

//alert("Agregado al carrito")
  })
 



// JSON * productos **  //*CON TIPO DE DATO (TYPEOF)

const SpidermanJSON= JSON.stringify(Spiderman)
console.log(SpidermanJSON, typeof SpidermanJSON) 

const BatmanJSON= JSON.stringify(Batman)
console.log(BatmanJSON, typeof BatmanJSON)

const KratosJSON= JSON.stringify(Kratos)
console.log(KratosJSON, typeof KratosJSON)

const WzJSON= JSON.stringify(Wz)
console.log(WzJSON, typeof WzJSON)

const ForhonorJSON= JSON.stringify(Forhonor)
console.log(ForhonorJSON, typeof ForhonorJSON)

const DbzJSON= JSON.stringify(Dbz)
console.log(DbzJSON, typeof DbzJSON)


//RECUPERANDO JSON DE LOCALSTORAGE * CONVERTIRLO EN OBJETO CON JSON.PARSE()*
 
const juegoJSON = localStorage.getItem("Spiderman");
const juego = JSON.parse(juegoJSON);

console.log(juego, typeof juego);

const juego2JSON = localStorage.getItem("Batman");
const juego2 = JSON.parse(juego2JSON);

console.log(juego2, typeof juego2);

const juego3JSON = localStorage.getItem("Kratos");
const juego3 = JSON.parse(juego3JSON);

console.log(juego3, typeof juego3);

const juego4JSON = localStorage.getItem("Wz");
const juego4 = JSON.parse(juego4JSON);

console.log(juego4, typeof juego4);

const juego5JSON = localStorage.getItem("Forhonor");
const juego5 = JSON.parse(juego5JSON);

console.log(juego5, typeof juego5);

const juego6JSON = localStorage.getItem("Dbz");
const juego6 = JSON.parse(juego6JSON);

console.log(juego6, typeof juego6);


//CARGAR CARRO DESDE LOCALSTORAGE
if(localStorage.getItem("carrito")) {
  carrito = JSON.parse.apply(localStorage.getItem("carrito"));
}




//SOLUCIONAR ERROR DE QUE RECARGA LA PAGINA Y SE VACIA CARRITO

 