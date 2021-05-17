//Commit

//COUNTS
let cheese = 0;
//clickUpgrades
let pickaxeCount = 0;
let shovelCount = 0;
//automaticUpgrades
let cartCount = 0;
let roverCount = 0;

//MULT
//clickUpgrades
let pickaxeMult = 0;
let shovelMult = 0;
//automaticUpgrades
let cartMult = 0;
let roverMult = 0;




let clickUpgrades = {
  'pickaxe': {
    price: 10,
    quantity: 0,
    multiplier: 2
  },

  'shovel': {
    price: 10,
    quantity: 0,
    multiplier: 2
  }
};


let automaticUpgrades = {
  'rover': {
    price: 20,
    quantity: 0,
    multiplier: 4
  }
  ,
  'cart': {
    price: 20,
    quantity: 0,
    multiplier: 4
  }
};

let totalClickUpgrades = 0;
let totalAutoUpgrades = 0;
let totalUp = 0;

// First create a method called collectAutoUpgrades, this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource. (See example below)



// We want this to happen automatically, so we will need to use setInterval (reference) to make sure this occurs every three seconds automatically, we can set this automatic invocation like so:
function collectAutoUpgrades() {
  let autoIncrement = totalAutoUpgrades * automaticUpgrades.rover.multiplier
  cheese = cheese + autoIncrement
  update()
}
function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
  update()
}

function mine() {
  if (totalAutoUpgrades != 0 || totalClickUpgrades != 0) {
    let increment = totalClickUpgrades * clickUpgrades.pickaxe.multiplier
    cheese = cheese + increment

  }
  else {
    cheese++
  }
  update()

}

function buyPickaxe(pickaxe) {
  if (cheese < clickUpgrades.pickaxe.price) {
    console.log("You can't purchase this")
  }
  else if (cheese >= clickUpgrades.pickaxe.price) {

    clickUpgrades.pickaxe.quantity++
    console.log("You have " + clickUpgrades.pickaxe.quantity + " pickaxes")
    pickaxeCount++
    pickaxeMult = pickaxeCount * 2
    cheese = cheese - clickUpgrades.pickaxe.price
    console.log("you have " + cheese + "cheese")
    clickUpgrades.pickaxe.price++
    totalClickUpgrades++
    update()
  }
}
function buyShovel(shovel) {

  if (cheese < clickUpgrades.shovel.price) {
    console.log("You can't purchase this")
  }

  else if (cheese >= clickUpgrades.shovel.price) {

    clickUpgrades.shovel.quantity++
    console.log("You have " + clickUpgrades.shovel.quantity + " shovels")
    shovelCount++
    shovelMult = shovelCount * 2

    cheese = cheese - clickUpgrades.shovel.price
    console.log("you have " + cheese + "cheese")
    clickUpgrades.shovel.price++

    totalClickUpgrades++
    update()
  }
}

function buyCart(cart) {
  if (cheese < automaticUpgrades.cart.price) {
    console.log("You can't purchase this")
  }
  else if (cheese >= automaticUpgrades.cart.price) {
    // startInterval()

    //     //this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource.

    automaticUpgrades.cart.quantity++
    console.log("You have " + automaticUpgrades.cart.quantity + " carts")
    cartCount++
    cartMult = cartCount * 4

    cheese = cheese - automaticUpgrades.cart.price
    console.log("You have " + cheese + " cheese")
    automaticUpgrades.cart.price = automaticUpgrades.cart.price + 2

    totalAutoUpgrades++
    console.log("You have " + totalAutoUpgrades + " total click upgrades")
    startInterval()
  }

  update()
}

function buyRover(rover) {
  if (cheese < automaticUpgrades.rover.price) {
    console.log("You can't purchase this")
  }
  else if (cheese >= automaticUpgrades.rover.price) {
    //startInterval()

    //this will iterate over the automaticUpgrades, total the quantity of each automaticUpgrade times their multiplier, and add that value to the cheese resource.
    automaticUpgrades.rover.quantity++
    console.log("You have " + automaticUpgrades.rover.quantity + " rovers")
    roverCount++
    roverMult = roverCount * 4

    cheese = cheese - automaticUpgrades.rover.price
    console.log("You have " + cheese + " cheese")
    automaticUpgrades.rover.price = automaticUpgrades.rover.price + 2

    totalAutoUpgrades++
    console.log("You have " + totalAutoUpgrades + " total click upgrades")
    startInterval()
  }

  update()
}



//prints new values to screen
function update() {

  //VALUES
  let cheeseElm = document.getElementById('cheese-mined')
  cheeseElm.innerText = cheese

  //clickUpgrades
  let pickaxeElm = document.getElementById('pickaxe')
  pickaxeElm.innerText = pickaxeCount

  let shovelElm = document.getElementById('shovel')
  shovelElm.innerText = shovelCount

  //autoUpgrades
  let cartElm = document.getElementById('cart')
  cartElm.innerText = cartCount

  let roverElm = document.getElementById('rover')
  roverElm.innerText = roverCount


  //MULTIPLIERS
  //clickUpgrades
  let pickaxeMultElm = document.getElementById('pickaxe-mult')
  pickaxeMultElm.innerText = pickaxeMult

  let shovelMultElm = document.getElementById('shovel-mult')
  shovelMultElm.innerText = shovelMult

  //autoUpgrades
  let cartMultElm = document.getElementById('cart-mult')
  cartMultElm.innerText = cartMult

  let roverMultElm = document.getElementById('rover-mult')
  roverMultElm.innerText = roverMult

}

