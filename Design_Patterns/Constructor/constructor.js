// Object creation patterns
var newObject = {};
console.log(newObject);
var newObject = Object.create(Object.prototype);
console.log(newObject);
var newObject = new Object({"a":"b", "c":"d"});
//{ a: 'b', c: 'd' }
var newObject = new Object('test');
//[String: 'test']
var newObject = new Object('test1', 'test2');
//[String: 'test1'] // test1 is key
console.log(newObject);


// Object assigned approach ECMA3
// set
newObject.test1 = "Hello world";
// get
console.log(newObject.test1);

// Set
newObject["key1"] = "value1";
// Get 
console.log(newObject["key1"]);

// Object assigned approach ECMA5
Object.defineProperty(newObject, "key2", {
    value : "this is value",
    writable : true ,
    configurable : true,
    enumerable: true
});

console.log(newObject);
var obj = {};

Object.defineProperties( obj, {
 
    "someKey": {
      value: "Hello World",
      writable: true
    },
   
    "anotherKey": {
      value: "Foo bar",
      writable: false
    }
   
  });

  // BAsic constructor
  function Name( fname, mname, lname ) {
 
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
   
    this.toString = function () {
      return "My name is " + this.fname + " "+ this.mname + " "+ this.lname;
    };
  }
   
  var fullname = new Name("x", "y", "z");  
   
  console.log( fullname.toString() );

  // Prototype Constructor
  function Name( fname, mname, lname ) {
 
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
   
  }
   
  Name.prototype.toString = function () {
    return "My name using prototype constructor is " + this.fname + " "+ this.mname + " "+ this.lname;
  };

  var fullname = new Name("x", "y", "z");  
   
  console.log( fullname.toString() );
  