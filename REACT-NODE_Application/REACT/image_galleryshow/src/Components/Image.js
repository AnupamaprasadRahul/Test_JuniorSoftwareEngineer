import React from 'react';
import queryString from "query-string";
import axios from "axios";
import '../Styles/image.css';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


{/* Custom Styles for Modal */}

 const customStyles = {
     overlay: {
         backgroundColor: "rgba(0, 0, 0, 0.9)"
     },
     content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
       borderRadius: '10px',
     },
 };

class Image extends React.Component{

    constructor() {
        super();
        this.state = {
            imageGallery: [],
           Obj:undefined, 
             gallery:[]
        }
    }

    componentDidMount() {
        const qs = queryString.parse(window.location.search);
        const y=JSON.stringify(qs);
        console.log(y);
        const z=JSON.parse(y);
        console.log(z);
        var Obj=z.id;
        console.log(Obj);
      

        axios({
            url: `http://localhost:5500/images/${Obj}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON' }
        })

            .then(res => {
                this.setState({ imageGallery: res.data.imageDetails})
            })
            .catch(err => console.log(err))
    }

    handleModal = (state, value) => {
       

       if (state ==="galleryModal" && value === true) {
           axios({
               url: `http://localhost:5500/api/images`,
               method: 'GET',
               headers: { 'Content-Type': 'application/JSON' }
           })
           .then(res => {
               this.setState({ gallery: res.data.results })
           })
           .catch(err => console.log(err))
       }
       this.setState({ [state]: value })
   }


render()
{
    const {imageGallery, galleryModal, gallery}=this.state;
   

     
      
    return(
        <div>
            

{ /* Gallery */}

{imageGallery.map((image)=>
        {
            return(
                <div className='container'>
                <div className='m-5'>
    <img src={image.url} alt="Flower_picture" width="100%" height="350" />
    <button className='gallery_button' onClick={() => this.handleModal('galleryModal', true)}>Image Collections</button>
</div>


<div className='Image_Name ms-5'> {image.title} </div>

<div className='Image_descript ms-5'> {image.description} </div>  </div>
        )

})}

      



        <Modal
                    isOpen={galleryModal}
                    style={customStyles}
                >
                    <div onClick={() => this.handleModal('galleryModal', false)} className='bi bi-x-lg me-3 modal_cross'></div>

                    <Carousel showThumbs={false} showStatus={false}>
                   
 
                           { gallery.map((gall)=>{
                            return(

                                <div class="row">
                                <div class="col-6">    

                                <img src={gall.url} alt="Flower" className="bannerImg" /></div>

                                <div class="col-6"><h3>{gall.title}</h3><br></br>

                                <p id="para">{gall.description}</p></div>
                            </div>
                            
                            )
                              
                            })} 
                       
                     </Carousel>

                </Modal>
        </div>
    )
}}
export default Image;









