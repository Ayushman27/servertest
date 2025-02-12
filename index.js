const express=require('express')
const PORT=3000 ;
const app=express();

app.get('/',(req,res)=>{
    res.send("SERVER RUNNING")
})

app.get('/user',(req,res)=>{
    res.send("USER API")
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})