function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');
/* 

Test comment

*/


// Example os .shift() and .unshift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);
console.log (groceryList.slice(1, 4));

