console.log("*******************************");
console.log("Ninja turtle script");
console.log("*******************************");

// Helpers
const d = document;
const b = d.body || d.bodyElement;
const docQuery = (elem) => {
  return d.querySelector(elem);
};
const w = window;
const $contentSpot = docQuery('.contentSpot');
const cl = (text, elem) => {
  return console.log('%c '+text, 'font-size: 16px; font-weight: 700; color: coral;', elem);
};

const Turtle = function(name)  {
  this.name = name;
  this.sayHi = () => {
    return cl(`Hey dudde, my name is ${this.name}.`);
  };
};

Turtle.prototype.weapon = function(weapon, number) {
  this.weapon = (number <= 2) ? number + ' ' + weapon + ' weapons': number + ' ' + weapon + ' weapon' ;
  return `${name} has ${weapon}`;
};

let raph = new Turtle('Raphael');
raph.sayHi();
console.log(raph.weapon);
console.log(`${raph.name} ${raph.weapon('Baston', 1)}`);

cl(raph.weapon);
cl(raph.hasOwnProperty('name'));
cl(raph.hasOwnProperty('sayHi'));

let don = new Turtle('Donatello');
cl(don.name);
cl(don.weapon('sword',1));
don.sayHi();

cl(raph.constructor.prototype);