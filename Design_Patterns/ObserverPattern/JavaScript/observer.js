function Click() {
    this.handlers = [];  // observers
}

// Add prototypes to click obervers
Click.prototype = {
    // Add tbject to list
    subscribe: function (fn) {
        this.handlers.push(fn);
    },
    // Remove tbject to list
    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
    // Notify all obervers
    notify: function (o, thisObj) {
        var scope = thisObj;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

function run() {
    // Handler function 
    var clickHandler = function (item) {
        console.log("Notifying Object by event : " + item);
    };
    var click = new Click();

    // Code to subscribe and unsubscribe the handlers
    click.subscribe(clickHandler);
    click.notify('event #1');
    click.unsubscribe(clickHandler);
    click.notify('event #2');
    click.subscribe(clickHandler);
    click.notify('event #3');
}

run();