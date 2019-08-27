function Cat(){
  this.stomath = []
}
Cat.prototype.eat = function(food){
  this.stomath.push(food);
}
module.export = Cat;