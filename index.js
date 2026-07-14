const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("From Manual Deployment to Fully Automated CI/CD – A Great Learning Journey! ");
});

module.exports = app;

if(require.main===module){
    app.listen(3000);
}