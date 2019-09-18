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

dPrint = (info, elem, signReference) => {
  if(signReference === undefined || signReference === null) {
    return function(elem) {
      var referencedElem = docQuery('.' + elem);
      referencedElem.innerHMTL = referencedElem + ' ' + info;
      return console.log('Element added to the DOM tree.');
    };
  } else {
    var referencedElem = docQuery(signReference + elem);
    cl('ref ', elem);
    referencedElem.innerHTML = referencedElem + ' ' + info;
    return cl('Element added using signReference argument');
  }
};

// Class
//----------------------------------
const Turtle = function(name, color)  {
  this.name = name;
  this.sayHi = () => {
    return cl(`Hey dudde, my name is ${this.name}.`);
  };

  // these variables cannot be accessed from the outside world
  var _name = name;
  var _color = color;

  this.getColor = (color) => {
    _color = this.color;
    return _color;
  };

  this.setColor = (color) => {
    if(typeof color !== 'string') {
      throw error('color is not of the string type');
    } else {
      _color = this.color;
      return _color;
    }
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

Turtle.prototype.toString = function() {
  return `A turtle called ${this.name}`;
};

// Redefining / Overriding a prototype
// ------------------------------------
/*Turtle.prototype = {
  attack: function() {
    return `{this.name} tickles you \'till you cry with laughter`;
  }
};

// Must redefine the property's constructor
Turtle.prototype.constructor = Turtle;*/

// Classes in use
// ------------------------------------
let raph = new Turtle('Raphael', 'red');
raph.sayHi();
cl(raph.weapon);
cl(`${raph.name} ${raph.weapon('Baston', 1)}`);
cl(raph.weapon);
cl(raph.hasOwnProperty('name'));
cl(raph.hasOwnProperty('sayHi'));

let don = new Turtle('Donatello', 'orange');
cl(don.name);
cl(don.weapon('sword',1));
don.sayHi();

let mike = new Turtle('Michaellangelo', 'purple');
mike.sayHi();
cl('Mike\'s color BEFORE definition changes ', raph.getColor());

cl(raph.constructor.prototype);
cl(raph.attack());
cl('raph color is ', raph.getColor());

cl('getPropertyOf obj ', Object.prototype.isPrototypeOf(raph));
cl('dunder method ', raph.__proto__);
cl('Is rpototyoe of: ', Turtle.isPrototypeOf(raph));
cl('Has own property ', raph.hasOwnProperty('name'));
cl('Has own property ', raph.hasOwnProperty('weapon'));


cl('was intantiated from another obj: ');
// 2 instanceOf Number; // Check it out

cl('toString method redefined: ', raph.toString());

Object.getOwnPropertyDescriptor(don, 'color');

Object.defineProperty(mike, 'color', {
  value: 'blue', enumerable: true, writable: false
});

cl('Mike\'s color after definition changes ', raph.getColor())

;
//dPrint('print sth', 'myElement', '#')


// Working with getter and setters

let example = {};

Object.defineProperty(example, 'sillyString', {
  get: function() {
    return 'Craaaaazy';
  },

  set: function(value) {
    return value;
  }
});

example.sillyString = "Hi there!";
cl(example.sillyString);

// using a deeper object to dekonstrate

let Dice = function() {
  'use strict';

  let sides = '';
  sides = 6;

  Object.defineProperty(this, 'sides', {
    get: function() {
      return `this dice has {this.sides} sides`;
    },
    set: function(value) {
      if(value > 0) {
        sides = value;
        return sides;
      } else {
        throw new Error('The number of sides must be positive');
      }
    }
  });
};

let yellowDice = new Dice();
cl('Yellow dice ', yellowDice.sides);

yellowDice.sides = 10;
cl('Yellow dice 10 sides ', yellowDice.sides);

let blueDice = new Dice();
//blueDice.sides = 0;


// checking for loop speed
var myArray = [];

for(var x=0; x<1e6; x++) {
  myArray.push(x);
}

console.time('First counter');

var firstCounter = 0;

for(var y=0; y<myArray.length; y++) {
  firstCounter++;
}

console.timeEnd('First counter');


console.time('Second counter');

var secondCounter = 0;
var z=0, arrLength = myArray.length;

for(z = 0; z<arrLength;) {
  secondCounter++;
  z++;
}

console.timeEnd('Second counter');