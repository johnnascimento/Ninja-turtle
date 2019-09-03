cl('************************');
cl('OOP studies');
cl('************************');

const Human = {
  head: 1,
  dorso: 1,
  arms: 2,
  legs: 2,
  
  walk: function() {
    cl('Walking');
  }
};

const Heroe = Object.create(Human, { getDressedUp: { 
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
      return `the symbiose sticks on the costume and turn everything pitch black.
      Now you're Venon`;
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

spiderman = Object.create(Heroe);
spiderman.name = 'The spiderman';
cl(spiderman.getDressedUp());
cl(spiderman.sayHi());
cl(spiderman.changeCostume());

gwen = Object.create(Human, { name: { value: 'Gwen Stacy', enumerable: true}, age: { value: 20, enumerable: true}, job: { value: 'Scientist', enumerable: true}});
cl(gwen.name);

Object.defineProperty(gwen, 'hairColor', {
  value: 'blond',
  enumerable: true,
  writable: true
});

cl(gwen.hairColor);

