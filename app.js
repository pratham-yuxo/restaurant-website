const express =require("express");
const path= require("path");
// const fs=require("fs");
const app = express();
const port =80;
// express 
app.use('/static',express.static('static'))//name of folder
app.use(express.urlencoded());


//pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))// from which directory u want to read your directory files

//endpoints
app.get("/",(req,res)=>{
    res.status(200).render('home.pug');
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact'/*,{title:'hey',message:'dehoyrr'}*/);
})
app.post('/',(req,res)=>{
    console.log(req.body)
    // res.status(200).render()
})


  // starting server
app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
    
})