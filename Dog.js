var chalk = require('chalk');
function Dog(name){
  this.kindFoods = []
  this.name = name;
}

Dog.prototype.addFood = function(kindFood){
  this.kindFoods.push(kindFood);
}
Dog.prototype.sayHi = function(){
  console.log('Hello, I am Dog. My name is '+ chalk.green(this.name));
}
module.exports = Dog;