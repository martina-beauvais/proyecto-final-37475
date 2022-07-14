function showMessage() { 
    alert('¡Hola!')
}

showMessage()

class Producto {
    constructor (id, productos, precio, stock) {
        this.id = id, 
        this.productos = productos,
        this.precio = precio,
        this.stock = stock
    }
}

// --- Los productos disponibles con sus precios y stocks correspondientes: ---
let id, productos, precio, stock 

const producto1 = new Producto (0, "Una Eduación Mortal, de Naomi Novik", "350", "1500")
const producto2 = new Producto (1, "Lore, de Alexandra Bracken", "400", "800")
const producto3 = new Producto (2, "Renegados, de Marissa Meyer", "300", "3000")
const producto4 = new Producto (3, "Matar Un Reino, de Alexandra Christo", "250", "500")
const producto5 = new Producto (4, "Sombra y Hueso (Estuche Trilogia), de Leigh Bardugo", "900", "2010")
const producto6 = new Producto (5, "Gorgeous - Taylow Swift", "800", "100")
const producto7 = new Producto (6, "Levitating - Dua Lipa", "800", "240")
const producto8 = new Producto (7, "Heartstopper", "750", "50")
const producto9 = new Producto (8, "I'm a mirrorball - Taylor Swift", "470", "500")
const producto10 = new Producto (9, "Pisces - signo zodiacal", "350", "1025")

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]
let nombre, verProductos, producto

// --- Se le pide al usuario que ingrese un nombre para darle la bienvenida --- 
do{
    nombre = prompt ("Insertar nombre").toLowerCase()
    if(isNaN(nombre)){
        alert(`Bienvenido/a, ${nombre}`)
    }else{
       alert("Por favor, ingrese un nombre")
    }
}while(nombre != nombre)
    
// --- Se le mostrará al usuario los productos, con sus respectivos precios ---
do{ 
    alert("Tenemos algunos productos para mostrarte")
    verProductos = prompt("¿Deseas verlos?").toLowerCase()
    if(verProductos != "no") {
        alert( " Libro (1): "+arrayProductos[0].productos+" con un precio de "+arrayProductos[0].precio+
        "\n Libro (2): "+arrayProductos[1].productos+" con un precio de "+arrayProductos[1].precio+
        "\n Libro (3): "+arrayProductos[2].productos+" con un precio de "+arrayProductos[2].precio+
        "\n Libro (4): "+arrayProductos[3].productos+" con un precio de "+arrayProductos[3].precio+
        "\n Libro (5): "+arrayProductos[4].productos+" con un precio de "+arrayProductos[4].precio+
        "\n Eco Bag (6): "+arrayProductos[5].productos+" con un precio de "+arrayProductos[5].precio+
        "\n Eco Bag (7): "+arrayProductos[6].productos+" con un precio de "+arrayProductos[6].precio+ 
        "\n Eco Bag (8):"+arrayProductos[7].productos+" con un precio de "+arrayProductos[7].precio+
        "\n Eco Bag (9):"+arrayProductos[8].productos+" con un precio de "+arrayProductos[8].precio+
        "\n Eco Bag (10):"+arrayProductos[9].productos+" con un precio de "+arrayProductos[9].precio)
    }else{
        alert("Gracias, vuelve más tarde.")
    }
}while((verProductos != "si"))


console.log(arrayProductos)

// --- Se mostrará en la consola los precios mayores a $500 ---
let buscarPrecio = arrayProductos.filter(producto => producto.precio > 500)
console.log(buscarPrecio)

// --- Se mostrará en la consola el stock, de los productos, menores a 2010 ---
let buscarStock = arrayProductos.filter(producto => producto.stock < 2010)
console.log(buscarStock)

// --- El usuario indica el costo de los dos productos que desea comprar ---
do{
    seleccionarProducto =  parseInt(prompt(`Ingrese el costo ($) de uno (1) de los productos que desee comprar: 
    1 - Una Eduación Mortal, de Naomi Novik = $350
    2 - Lore, de Alexandra Bracken = $400
    3 - Renegados, de Marissa Meyer = $300
    4 - Matar Un Reino, de Alexandra Christo = $250
    5 - Sombra y Hueso (Estuche Trilogia), de Leigh Bardugo = $900
    6 - Gorgeous - Taylow Swift = $800
    7 - Levitating - Dua Lipa = $800
    8 - Heartstopper = $750
    9 - I'm a mirrorball - Taylor Swift = $470
    10 - Pisces - signo zodiacal = $350`))

    seleccionarProducto2 =  parseInt(prompt(`Ingrese el costo ($) otro de los productos que desee comprar: 
    1 - Una Eduación Mortal, de Naomi Novik = $350
    2 - Lore, de Alexandra Bracken = $400
    3 - Renegados, de Marissa Meyer = $300
    4 - Matar Un Reino, de Alexandra Christo = $250
    5 - Sombra y Hueso (Estuche Trilogia), de Leigh Bardugo = $900
    6 - Gorgeous - Taylow Swift = $800
    7 - Levitating - Dua Lipa = $800
    8 - Heartstopper = $750
    9 - I'm a mirrorball - Taylor Swift = $470
    10 - Pisces - signo zodiacal = $350`))

} while ((seleccionarProducto <= 240 || seleccionarProducto >= 910) && (seleccionarProducto2 <= 240 || seleccionarProducto2 >= 910)) 

function sumar(seleccionarProducto, seleccionarProducto2) {
    return seleccionarProducto + seleccionarProducto2
}
// --- Mostar en la consola la suma de ambos productos ---
console.log(sumar(seleccionarProducto, seleccionarProducto2)) 

alert(`El costo final es de $ ${sumar(seleccionarProducto, seleccionarProducto2)}`)

let pregunta, continua
const NuevosProductos = []

// --- Ofrecerle al usuario añadir más productos ---
do{
    pregunta = prompt("¿Desea ingresar un producto?")
    if(pregunta != "no") {
        id = parseInt(prompt("Ingrese un número partiendo desde 10"))
        if(isNaN(id) || id <= 9){
            alert("Por favor, ingrese números válidos")
        }
        productos = prompt("Insertar el nombre del producto").toLowerCase();
        precio = parseInt(prompt("Ingrese el precio"))
        if(precio <100){
            alert("Ingrese valores válidos")
        }
        stock = parseInt(prompt("Ingrese un número para indicar la cantidad de stock del producto"))
        if(isNaN(stock)){
            alert("Por favor, ingrese números válidos")
        }
        const nuevoProducto = new Producto (id, productos, precio, stock)
        NuevosProductos.push(nuevoProducto);

        continua = prompt("¿Desea continuar ingresando más productos?").toLowerCase()
    }
}while((pregunta != "no") && (continua != "no") || (isNaN(id)) || (id <= 9) || (isNaN(precio)) || (precio <100))

alert("Muchas gracias por tu tiempo :)")
console.log(NuevosProductos)

