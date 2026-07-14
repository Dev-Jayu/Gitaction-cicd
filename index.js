const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello sagar its working ");
});

module.exports = app;

if(require.main===module){
    app.listen(3000);
}