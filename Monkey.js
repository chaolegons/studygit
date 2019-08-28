function Monkey(){

}

Monkey.prototype.jump = function(){
  console.log('Jumping !!!');
}
Monkey.prototype.run = function(){
  console.log('Running...');

}
module.exports = Monkey;