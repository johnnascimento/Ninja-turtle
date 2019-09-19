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
