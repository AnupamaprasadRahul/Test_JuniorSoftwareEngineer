import { BrowserRouter,Routes,Route } from "react-router-dom";
import Image from "./Image";
import ImageGallery from "./ImageGallery";



const Router=()=>
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ImageGallery/>} />
            <Route path="/image" element={<Image />} />
        </Routes>
        
        </BrowserRouter>

           )
}
export default Router;
