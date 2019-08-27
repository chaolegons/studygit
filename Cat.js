function Cat(){
  this.stomath = [];
  this.age = 0;
}
Cat.prototype.eat = function(food){
  this.stomath.push(food);
}

Cat.prototype.addAge = function(age){
  this.age = age
}
module.export = Cat;