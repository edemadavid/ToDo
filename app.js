const express = require ("express");
const app = express ();

const path = require("path/posix");
const port = process.env.port || 3000

const bodyparser = require ("body-parser");
const { listen } = require("express/lib/application");
app.use(bodyparser.urlencoded({extended: "True"}));

app.set("view engine", "ejs");


app.get("/", function(res, req){

    ejs.render ("list", {});

})

app.post("/", function(res, req){

})

app.listen(port, function(){
    console.log("Server has started on port: " + port);
})


