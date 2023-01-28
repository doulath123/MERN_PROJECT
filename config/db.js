const mongoose=require('mongoose')
const config=require('config');
const db=config.get('mongoDB_URL');
mongoose.set('strictQuery', false);
const connectDB=async()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            // useCreateIndex:true,1`   
        
            // useFindAndModify:false
        });
        console.log('mongoDB connected successfuly')

    }
    catch(err){
        console.log(err.message)
        process.exit(1)

    }
}

module.exports=connectDB