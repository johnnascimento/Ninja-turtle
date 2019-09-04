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