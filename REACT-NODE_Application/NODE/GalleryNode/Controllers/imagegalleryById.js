
const ImagesById=require('../Database/imagegallery');


        
exports.getImagesById = (req, res) => {
  const { id } = req.params;
  ImagesById.find({ _id: id })
      .then(response => {
          res.status(200).json({
              message: "Images fetched Successfully based on Id", 
              imageDetails: response
          })
      })
      .catch(err => {
          res.status(500).json({ error: err })
      })
  
}

