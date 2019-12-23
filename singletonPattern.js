class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
var Singleton = (function () {
    var instance;
    
    function createInstance() {
        // var object = new Object("I am the instance");
        var object = new Car('ford');
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    console.log("Same instance? ", instance1,instance2  + (instance1 === instance2));  
}
// Object.freeze() -- The freezing an object prevents new properties from being added to it, existing properties from being removed, prevent changing the enumerability,

run();