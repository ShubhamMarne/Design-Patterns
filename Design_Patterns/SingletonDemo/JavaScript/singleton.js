var singleton = ( function  () {
    // singleton reference 
    var _instance;

    // create instance and share function
    function init()
    {
        function privateMethod()
        {
            console.log("This is private method");
        }

        var privateVar = "This is private variable";

        var privateRandomNumber = Math.random();

        return {
            publicMethod : function () {
                console.log("This is public method");
            },

            publicVar : "This is public variable",

            getRandomNumber : function () {
                return privateRandomNumber;
            }
        }
    }


    return {
        // Create instance if not exists else return same exists
        getInstance : function () {
            if(!_instance){
                _instance = init();
            }
            return _instance;
        }
    }
})();


var singleA = singleton.getInstance();
var singleB = singleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
singleA.publicMethod();