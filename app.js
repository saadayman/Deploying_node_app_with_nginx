const express = require('express')
const app = express()
app.get('/',(req,res,next)=>{
    res.json({msg:'API WORKING'})
})


app.listen(3000,()=>{
    console.log('App running on port 3000')
})