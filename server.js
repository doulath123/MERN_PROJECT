const express=require('express');
// const mongoose=require("mongoose")
const connectDB=require("./config/db")
const app=express();

const port = process.env.port || 8420
connectDB();

app.use(express.json({extended:false}));

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))

app.listen(port, ()=>{
    console.log(`Server started on port ${port}` )
})