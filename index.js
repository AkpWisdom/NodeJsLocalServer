const express = require('express')

const app = express();

const PORT = 4000;

app.get("/",(req,res)=>{
    res.send("NodeJS Local server")
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});