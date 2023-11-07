const Images=require('../Database/imagegallery');



exports.getImages=(req,res)=>
{

    Images.find({},{})
    .then(response =>
       {
           res.status(200).json({
                   message:'Images fetched successfully',
                   results:response
                               })
       })
       .catch(err =>
           {
               res.status(500).json({error:err})
           })
}





