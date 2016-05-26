var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactlist", ['contactlist']);
var bodyparser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.get("/contactlist", function (req, res) {
    console.log("Received a GET request");
    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });

})

app.post("/contactlist", function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function (err, doc) {
        res.json(doc);
    })
});

app.delete("/contactlist/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectID(id)}, function (err, doc) {
        res.json(doc);

    });
});

app.get("/contactlist/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectID(id)}, function (err, doc) {
        res.json(doc);

    });
});

app.put("/contactlist/:id", function (req, res) {
    var id = req.params.id;
    console.log(req.boy.name);
})

app.listen(3000);
console.log("server running on port 3000")