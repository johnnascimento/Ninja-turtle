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
  this.weapon = weapon;
  return `My weapon is` ;
};

let raph = new Turtle('Raphael');
console.log(raph.sayHi());
console.log(raph.name);
console.log(raph.weapon('Baston'));

