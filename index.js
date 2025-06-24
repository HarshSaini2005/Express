const express = require("express");
const app = express(); 

// console.log(app);


let port = 8080;
app.listen(port,()=>{
    console.log(`app listening a port ${port}`);
});

// app.use((req,res)=>{
//     //console.log(req);
//      console.log("new incoming request");
//      res.send(
        
//      );
// });

app.get("/",(req,res)=>{
    res.send("i am root path");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send("i am root path");
});

app.get("/search",(req, res)=>{
   let {q} =req.query;
   if(!q){
    res.send("<h1>not exist</h1>");
   }
    res.send(`search result for query: ${q}`);
});

// app.get("/apple",(req,res)=>{
//     res.send("you contracted apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("i am orange path");
// });

// app.get("*",(req,res)=>{
//     res.send("the path is not match");
// });

// app.post("/",(req,res)=>{
//     res.send("you sent a post path");
// });