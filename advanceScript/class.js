        //Class declarations
class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  }
console.log("hobbit",Hobbit)

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined




////            //class expressions
//incoreect
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor


var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//correct way
var Polygon = class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  var Square = new Polygon();
  Square.height = 10;
  Square.width = 10;
  console.log(Square);