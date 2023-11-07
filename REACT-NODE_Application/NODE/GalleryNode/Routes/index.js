const express=require('express');

const imageController=require('../Controllers/imagegallery');
const imageControllerById=require('../Controllers/imagegalleryById');
const route=express.Router();

route.get('/api/images',imageController.getImages);
route.get('/images/:id',imageControllerById.getImagesById);

module.exports=route;