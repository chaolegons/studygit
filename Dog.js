function Dog(){
  this.kindFoods = []
}

Dog.prototype.addFood = function(kindFood){
  this.kindFoods.push(kindFood);
}
module.export = Dog;