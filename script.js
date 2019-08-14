console.log("*******************************");
console.log("Ninja turtle script");
console.log("*******************************");

// Helpers
// ----------------------------------
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

// Class
//----------------------------------
const Turtle = function(name)  {
  this.name = name;
  this.sayHi = () => {
    return cl(`Hey dudde, my name is ${this.name}.`);
  };
};

Turtle.prototype.weapon = function(weapon, number) {
  this.weapon = (number <= 2) ? number + ' ' + weapon + ' weapon': number + ' ' + weapon + ' weapons' ;
  return `${name} has ${weapon}`;
};

Turtle.prototype.attack = function() {
  return `${this.name} hits with his ${this.weapon}.`;
};

Turtle.prototype.move = function(up, right, down, left) {
  if(up !== undefined || up !== null) {
    return `${this.name} moved ${up}.`;
  } 
  
  if(right !== undefined || right !== null) {
    return `${this.name} moved ${right}.`;
  }
  
  if(down !== undefined || down !== null) {
    return `${this.name} moved ${down}.`;
  } 
  
  if(left !== undefined || left !== null) {
    return `${this.name} moved ${left}.`;
  }
};

// Classes in use
// ------------------------------------
let raph = new Turtle('Raphael');
raph.sayHi();
cl(raph.weapon);
cl(`${raph.name} ${raph.weapon('Baston', 1)}`);
cl(raph.weapon);
cl(raph.hasOwnProperty('name'));
cl(raph.hasOwnProperty('sayHi'));

let don = new Turtle('Donatello');
cl(don.name);
cl(don.weapon('sword',1));
don.sayHi();

cl(raph.constructor.prototype);
cl(raph.attack());