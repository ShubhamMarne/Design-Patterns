var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {

        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);
            } else {                       // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

function run() {

    var a = new Participant("A");
    var b = new Participant("B");
    var c = new Participant("C");

    var chatroom = new Chatroom();
    chatroom.register(a);
    chatroom.register(b);
    chatroom.register(c);

    a.send("Hi all. How u doing? ");
    c.send("All is fine at my end ");
    a.send("Cool ", b);
    b.send("Same here");
    c.send("Same here. WBU?", b);
    a.send("I am very good ", b);
}

run();