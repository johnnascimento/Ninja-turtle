cl('************************');
cl('OOP studies');
cl('************************');

const Human = {
  head: 1,
  dorso: 1,
  arms: 2,
  legs: 2,
  name: 'name',
  age: 'age',
  
  walk: function() {
    cl('Walking');
  },
  init: function(name, age) {
    this.name = name;
    this.age = age;
    this.init = undefined;
  }
};

const HeroeVillan = Object.create(Human, { getDressedUp: { 
      value: function(){
        return `${this.name} run into an alley and put up the super heroe suit`;
      },
      enumerable: true,
      writable: false
  },
  sayHi: {
    value: function() {
      return `Hi I\'m the neighbourhood friend ${this.name}`;
    },
    enumerable: true,
    writable: false
  },
  changeCostume: {
    value: function() {
      return `the symbiose sticks to the clothes and turn everything pitch black.
      Now you're Venon`;
    },
    enumerable: true,
    writable: false
  },
  init: {
    value: function(name, realName) {
      this.name = name;
      this.realName = realName;
      this.init = undefined;
    },
    enumerable: true,
    writable: false
  }
});


cl(Human);
cl(Human);

petter = Object.create(Human);
petter.name = 'Petter Parker';
petter.age = 20;
petter.job = 'Photographer';
cl(petter.name);

spiderman = Object.create(HeroeVillan);
spiderman.name = 'The spiderman';
spiderman.realName = 'Petter Parker';
cl(spiderman.getDressedUp());
cl(spiderman.sayHi());
cl(spiderman.changeCostume());
cl(spiderman.realName);

gwen = Object.create(Human, { name: { value: 'Gwen Stacy', enumerable: true}, age: { value: 20, enumerable: true}, job: { value: 'Scientist', enumerable: true}});
cl(gwen.name);

Object.defineProperty(gwen, 'hairColor', {
  value: 'blond',
  enumerable: true,
  writable: true
});

cl(gwen.hairColor);

eddie = Object.create(Human);
eddie.init('Eddie brook', 'unknown');
cl(eddie.name);
cl(eddie.age);
cl(eddie.init);

venon = Object.create(HeroeVillan);
venon.init('Eddie Brook', 'Venon');
cl(venon.name);
cl(venon.realName);
cl(venon.changeCostume);
cl(venon.walk());
cl(Object.getPrototypeOf(venon) === HeroeVillan);
cl(Object.getPrototypeOf(gwen) === Human);
cl(Object.getPrototypeOf(venon) === Human); // expected false
cl(HeroeVillan.isPrototypeOf(spiderman));

/* Adding methods to the built-in objects
-----------------------------------------*/

/* Is even or odd number method */
Number.prototype.isEven = function() {
  return this%2 === 0;
};

Number.prototype.isOdd = function() {
  return this%2 === 1;
};

let seven = 7;

cl(seven.isEven());
cl(seven.isOdd());


/* Adding first and last elem on Array's index
-----------------------------------------*/
Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

justiceLeague = ['Wonder Woman', 'Aquaman', 'Batman', 'The Flash', 'Superman', 'Ajax'];
cl(justiceLeague.first());
cl(justiceLeague.last());

Array.prototype.delete = function(i) {
  return this.splice(i, 1);
};

justiceLeague.delete(1);
cl(justiceLeague);

/* Monkey-patching the String method */
String.prototype.trim = String.prototype.trim || function() {
  return this.replace(/^\s+|\s+$/, '');
};

trimTester = '   My name is John    ';
cl(trimTester);

trimTester.trim();
cl(trimTester);

Object.defineProperty(Object.prototype, ‘mixin’, {
  enumerable: false,
  writable: false,
  configurable: false,
  value: function() {
    for (var i = 0, max = arguments.length ; i < max ; i++) {
      if(typeof arguments[i] === “object”) {
        var object = arguments[i];
        for (var property in object) {
          if (object.hasOwnProperty(property)) {
            if (typeof object[property] === “object”) {
              this[property] = (object[property].constructor === Array);
              ↵ ? [] : {};
              this[property].mixin(object[property]);
            } else {
              var description = Object.getOwnPropertyDescriptor(object,
                ↵property);
              Object.defineProperty(this,property, description);
            }
          }
        }
      }
    }
    return this;
  }
});

let a = {};
let b = {
  name: 'John',
  surname: 'Nascimento'
};

a.mixin(b);
console.log(a.name + ' ' + a.surname);