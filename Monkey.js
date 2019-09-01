function Monkey(){

}

Monkey.prototype.jump = function(){
    console.log('Jump');
}
Monkey.prototype.run = function(){
  console.log('running...');
}

module.exports = Monkey;