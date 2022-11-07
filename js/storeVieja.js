 //                           MARKET  OF AOE
 alert('Welcome  to AOE Store, dear user');

 let item        = parseInt(prompt('Choose  any armor, sword or axe what your prefer: 1.Brigantine - 2.Scimitar - 3.Arming Sword - 4.Viking Axe'))
 let keepBuying  = true
 let carry       = 0
 let yesOrNot    
 
class newItems {
    constructor(id,name,price,stock){
        this.id    = id;
        this.name  = name;
        this.price = price;
        this.stock = stock;
    }
}
const brigantine   = new newItems(1,"Brigantine",1500,5);
const scimitar     = new newItems(2,"Scimitar",800,20);
const armingSword  = new newItems(3,"Arming sword",1000,50);
const vikingAxe    = new newItems(4,"Viking axe",750,100);


 while(keepBuying === true){
    if(item === brigantine.id){
        carry = carry + brigantine.price;
        brigantine.stock = brigantine.stock-1
    } else if (item === scimitar.id) {
        carry = carry + scimitar.price;
    } else if (item === armingSword.id) {
        carry = carry + armingSword.price;
    } else if (item === vikingAxe.id){
        carry = carry + vikingAxe.price;
    }
 
yesOrNot = parseInt(prompt("If you want to keep buying? 1.Yes - 2.No"))
   if( yesOrNot === 1){
    item  = parseInt(prompt("Choose  any armor, sword or axe what your prefer: 1.Brigantine - 2.Scimitar - 3.Arming Sword - 4.Viking Axe")
    )
} else {
    keepBuying = false
  } 
}

const discountPurchase = discount(carry);
    alert(`Your discount purchase is ${discountPurchase}`)

    function discount(value) {
        let discount = 0
           if(value <= 2000){
              discount = 0
    } else if( value > 2000 && value <= 3000) {
            discount = 10 
    } else {
            discount = 15
    }
  

let valueDiscount = value * (discount / 100)
let finalValue    = value - valueDiscount
return finalValue
}

alert('Thanks for your purchase, come back soon!')


    