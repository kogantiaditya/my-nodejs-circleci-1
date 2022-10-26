var express = require("express"),
app = express();

app.get("/", function(req, res){
    res.send("Looks good");
})

app.listen(3000, function(){
    console.log("running on " + "https://localhost:3000/")
})