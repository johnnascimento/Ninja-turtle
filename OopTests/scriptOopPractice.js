const cl = (elem, text) => {
  if(elem === null || elem === undefined) {
    return function(text) {
      return  console.log('%c '+text, 'font-size: 16px; font-weight: 700; color: coral;');
    };
  } else {
    return console.log('%c '+text, 'font-size: 16px; font-weight: 700; color: coral;', elem);
  }
};

cl('************************');
cl('OOP studies 2');
cl('************************');

// Mixins
// ----------------------------------
Object.defineProperty(Object.prototype, 'mixin', {
  configurable: false,
  writable: false,
  enumerable: false,
  
  value: function() {
    max = arguments.length;
    for(var i = 0; i < max; i++) {
      if(typeof arguments[i] === 'object') {
        object = arguments[i];
        
        for(var property in object) {
          if(object.hasOwnProperty(property)){
            if(typeof object[property] === 'object') {
              this[property] = (object[property].constructor === 'array') ? [] : {};
              this[property].mixin(object[property]);
            } else {
              var description = Object.getOwnPropertyDescriptor(object, property);
              Object.defineProperty(this, property, description);
            }
          }
        }
      }
    }
    return this;
  }
});


Object.defineProperty(Object.prototype, 'copy', {
  configurable: false,
  writable: false,
  enumerable: false,
  value: function() {
    var object = Object.create(Object.getPrototypeOf(this));
    object.mixin(this);
    return object;
  }
});


// Improving buit-in methodd or creating new ones
// ---------------------------------
Array.prototype.delete = function(i) {
  return this.splice(i, 1);
};

String.prototype.trim = String.prototype.trim || function() {
  return this.replace(/^\s+|\s+$/, '');
};


flight = {
  fly: function() {
    console.log(`Up, up and away ${this.name} soars through the air!`);
    return this;
  }
};

const livingBeing = {
  head: 1,
  trunk: 1,
  arms: 2,
  legs: 2,
  eyes: 2,
  mouth: 1,
  ears: 2,
  nose: 1,
  feet: 2,
  
  talk: function() {
    console.log(`${this.name} is talking.`);
    return this;
  },
  
  walk: function() {
    console.log(`${this.name} has started walking.`);
    return this;
  },
  
  jump: function() {
    console.log(`${this.name} has jumped to avoid the obstacle.`);
    return this;
  },
  
  init: function(race, name, color, height, age) {
    if (race === undefined || race === null) {
      return function(name, age) {
        this.name = name;
        this.age = age;
      };
    } else {
      this.race = race;
      this.name = name;
      this.color = color;
      this.height = height;
      this.age = age;
    }
  }
};

superHuman = Object.create(livingBeing, { getDressedUp: {
    value: 'Went into a phone box and came out as a super heroe',
    enumerable: true,
    writable: true,
    configurable: false
  },
  realName: {
    value: this.realName,
    enumerable: true,
    writable: true,
    configurable: true
  },
  trueIdentity: {
    value: `My heroe name is ${this.name} but my real name is ${this.realName}`,
    enumerable: true,
    writable: true,
    configurable: false
  }
});

let clarkKent = Object.create(livingBeing);
clarkKent.init('Human', 'Clark Kent', 'white', 1.85, 28);
cl(clarkKent.name);

clarkKent.mixin(flight);
cl(clarkKent.fly);

let superman = Object.create(superHuman);
superman.init('Kryptonian', 'Superman', 'white', 1.85, 'unknown');
superman.realName = 'Clark Kent';
superman.mixin(flight);

cl(superman.name);
cl(superman.realName);
cl(superman.trueIdentity);
cl(superman.fly);

const fly = superman.fly;

let wonderwoman = Object.create(superHuman);
wonderwoman.init('Mutant', 'Wonder Woman', 'White', 1.75, 'unknown');

cl(fly.call(wonderwoman));



// BORROWING METHIDS FROM ARRAYS

slice = Array.prototype.slice;
slice.call(arguments, 1, 3);

// This represent the same as the statement above
[].slice.call(arguments, 1, 3);

Array.prototype.slice.call(arguments);