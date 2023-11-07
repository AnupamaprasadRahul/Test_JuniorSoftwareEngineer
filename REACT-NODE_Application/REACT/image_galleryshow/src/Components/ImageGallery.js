import React from 'react';
import axios from 'axios';
import navHook from './nav';
import '../Styles/style.css';





class ImageGallery extends React.Component{

    constructor()
    {
        super();
        this.state={
            ImageList:[] 
          
          }
    }

    

    componentDidMount(){
        axios({
            url:'http://localhost:5500/api/images',             
            method:'GET',
            headers:{'Content-Type':'application/JSON'}
        })
        .then(res=>{
            this.setState({ImageList:res.data.results})   
        })
        .catch(err=>console.log(err))
        
    }




   

    
    
    

    navigateFilterPage = (ImageName) => {
        this.props.navigate(`/image?id=${ImageName}`);
    }
   
    render()
    {
        const { ImageList}=this.state;
       
        
        return(


            <div>
                         <div class="container-fluid">
                         <h3>Flower Gallery</h3>
                         <div className="d-flex flex-wrap" >

                   {ImageList.map((img)=>{

                    return(
                        <div class="row ROW"   onClick={() => this.navigateFilterPage(img._id)}>
                        <div class="col" >
                        <img src={`assets/${img.image_url}`} alt="Flower" value={img.id} class="image"  />

                        </div>
                      
                        </div>

                    )
                   }) }  


                        
            </div>
            </div>
           
           
 


            </div>
        )
                }
   
            

              
    

            }

export default navHook(ImageGallery);