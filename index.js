//variable data
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

//function and block
function addBurger(){
    let newBurger = "Flatburger";
    burgers.push(newBurger);

    if(true){
        let anotherNewBurger = "Maple Bacon Burger";
        burgers.push(anotherNewBurger);
    }
}
function changeFeaturedDrink(){
    featuredDrink = "The Java Shake";
   console.log(featuredDrink);
}
changeFeaturedDrink();
console.log(`updated burgers: ${burgers}`);
console.log(`updated drinks: ${featuredDrink}`);
//variable declaration and scope
