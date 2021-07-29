var myModule= (function () {
 
var counter = 0;
return {

  incrementCounter: function () {
	return counter++;
  },

  resetCounter: function () {
	counter = 0;
  },
  
  getCounter : function () {
	  return counter;
  }
};

})();

myModule.incrementCounter();
myModule.incrementCounter();
console.log(myModule.getCounter());
myModule.resetCounter();
console.log(myModule.getCounter());