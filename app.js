//Commit

let cheese = 0;
//clickUpgrades
let pickaxeCount = 0;
let shovelCount = 0;
//automaticUpgrades
let cartCount= 0;
let roverCount = 0;



let clickUpgrades = {
  pickaxe: {
    price: 10,
    quantity: 0,
    multiplier: 2
  },
  
  shovel: {
    price: 10,
    quantity: 0,
    multiplier: 2
  }
};


let automaticUpgrades = {
  rover, cart: {
    price: 20,
    quantity: 0,
    multiplier: 4
  }
};
let totalClickUpgrades = clickUpgrades.pickaxe.quantity + clickUpgrades.shovel.quantity;
let totalAutoUpgrades = automaticUpgrades.cart.quantity + automaticUpgrades.rover.quantity;

function mine(){
  // if (totalAutoUpgrades == 0 && totalClickUpgrades == 0){
    cheese++
  // }
  //   else{
  //  clickUpgrades()
  //  autoUpgrade()
  // }
  
  //alert(cheese)
  update()
}


function clUpgrade(choice){
  //console.log("You purchased ", clickUpgrades[choice])
  
  if(cheese<totalClickUpgrades.price){
    console.log("You can't purchase this")
  }
  else{

    for(i=0; i<=totalClickUpgrades; i++){
      cheese = cheese-totalClickUpgrades.price
      totalClickUpgrades++
      
      if(choice == 'pickaxe'){
        clickUpgrades['pickaxe'].quantity++
      }
      else if(choice == 'shovel')
      {
        clickUpgrades['shovel'].quantity++
      }
    }
  }
  update()
}

function autoUpgrade(){
  if(cheese<automaticUpgrades.price){
    return
  }
  
  for(i=0; i<=totalAutoUpgrades; i++){
    cheese = cheese-totalAutoUpgrades.price
    totalAutoUpgrades++
    update()
  }
}

//prints new values to screen
function update(){
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
}

