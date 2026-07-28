const mongoose = require('mongoose')
require('dotenv').config();
async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected')
  }
  catch(err){
    console.log(`Error: ${err.message}`)
  }
}

module.exports = connectDB