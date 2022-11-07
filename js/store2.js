const productosArray = []

class newProduct {

    constructor(id,  name, price, stock) {
        this.id  = id
        this.name  = name
        this.price =  price
        this.stock = stock
    }

}

const  mandoble      = new newProduct(1, 'Mandoble', 700, 200)
productosArray.push(mandoble)
const  brigantine    = new newProduct(2, 'Brigantina', 750, 150)
productosArray.push(brigantine)
const  trabuchet     = new newProduct(3, 'Trabuchet', 20000, 5)
productosArray.push(trabuchet)
const  ram           = new newProduct(4, 'Ram', 7000, 20)
productosArray.push(ram)
const  longBow       = new newProduct(5, 'Long Bow', 500, 400)
productosArray.push(longBow)
const  butcherKnife  = new newProduct(6, 'Butcher Knife', 150, 10000)
productosArray.push(butcherKnife)
const  armingSword   = new newProduct(7, 'Arming Sword', 600, 2000)
productosArray.push(armingSword)
const  cannonGun     = new newProduct(8, 'Cannon gun', 10000, 40)
productosArray.push(cannonGun)
const  crossBow      = new newProduct(9, 'Crossbow', 1200, 1500)
productosArray.push(crossBow)
const  shield        = new newProduct(10, 'Shield', 250, 10000)
productosArray.push(shield)


//  DOM

const selectProd = document.querySelector('#store')









productosArray.forEach(elemento=>{
    const optionProd  = document.createElement('option');
    optionProd.innerText = `${elemento.name}: $ ${elemento.price}`;
    optionProd.setAttribute('id',`${elemento.id}`)
    selectProd.append(optionProd);
})
// carrito

const carrito = []



const botonIngresar   = document.getElementById('ingresarProd')
const finalizarCompra = document.getElementById('finalizar')

botonIngresar.onclick = () => {
    const indexProd =  selectProd.selectedIndex
    const productoSeleccionado = productosArray[indexProd]
    carrito.find(prod=>prod.id === productoSeleccionado.id)
    carrito.push(productoSeleccionado)
}

finalizarCompra.onclick = () => {
    let total = 0
    carrito.forEach( (prod) =>{
        total = total + prod.price
    })
    
    totalCompra.innerText = '';
totalCompra.innerText = `Felicidades compraste ${carrito.length} items, ya estas preparado para el combate y el total  gastado es $${total}`
     

     
    
}
