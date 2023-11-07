const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const Schema=mongoose.Schema
const gallerySchema = new Schema({
        image_url :                           
        {                     
            type: String,                     
            required :true
        },
        id:{
            type: Number,                     
            required :true
        },
        _id:{
            type:ObjectId,
            required:true
        }

      })

      module.exports = mongoose.model('Image_list',gallerySchema,'gallery');  