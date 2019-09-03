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

const Heroe = Object.create(Human);

cl(Human);
cl(Human);

petter = Object.create(Human);
petter.name = 'Petter Parker';
petter.age = 20;
petter.job = 'Photographer';
cl(petter.name);

gwen = Object.create(Human, { name: { value: 'Gwen Stacy', enumerable: true}, age: { value: 20, enumerable: true}, job: { value: 'Scientist', enumerable: true}});
cl(gwen.name);

