const express = require('express')
const app = express()
const postModel = require('./model/post.model')
const multer = require('multer')   
const {uploadFile} = require('./services/storage.service') 
const cors = require('cors')
const upload = multer({storage: multer.memoryStorage()})
app.use(express.json())
app.use(cors())

app.post('/create-post', upload.single("image"), async(req,res)=>{

  try{
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption
    })
    console.log("Every thing is Good in Post API")
    return res.status(201).json({
      message: "Post created successfully",
      post
    })
  }

  catch(err){
    return res.status(500).json({
      message: "Error creating post",
      error: err.message
    })
  }
})

app.get('/posts',async (req,res)=>{
  try{
    const AllPost = await postModel.find()
    return res.status(200).json({
      message:"All post are Fatched",
      post:AllPost
    })
  }
  catch(err){
    console.log(err)
  }
})

module.exports = app