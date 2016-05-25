var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.get("/contactlist", function (req, res) {
    console.log("Received a GET request");
    person1 = {
        name: "M",
        email: "M@gmail.com",
        number: "111111"
    }

    person2 = {
        name: "s",
        email: "s@gmail.com",
        number: "222"
    }
    person3 = {
        name: "d",
        email: "d@gmail.com",
        number: "11212324546"
    }

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
})
app.listen(3000);
console.log("server running on port 3000")