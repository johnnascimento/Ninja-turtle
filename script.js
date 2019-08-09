console.log("*******************************");
console.log("Ninja turtle script");
console.log("*******************************");

const Turtle = function(name)  {
  this.name = name;
  this.sayHi = () => {
    return `Hey dudde, my name is ${this.name}.`;
  };
};

Turtle.prototype.weapon = function(weapon, number) {
  this.weapon = (number <= 2) ? number + ' ' + weapon + ' weapons': number + ' ' + weapon + ' weapon' ;
  return `${name} has ${weapon}`;
};

let raph = new Turtle('Raphael');
console.log(raph.sayHi());
console.log(raph.name);
console.log(`${raph.name} ${raph.weapon('Baston', 1)}`);
console.log('Raph is prototype of Turtle?', raph.isPrototypeOf(Turtle));

let hasProperty = raph.hasOwnProperty(name);
console.log('has own prototype name? ', hasProperty);