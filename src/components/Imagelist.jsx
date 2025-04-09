import Imageshow from "./Imageshow"
import './Imagelist.css'
const Imagelist = ({images}) => {
 const renderImage = images.map((image)=> {
  return <Imageshow key={image.id} image={image}/>
 })
 
  return  (
    <div className="image-list">
      {renderImage}
    </div>
  )
}

export default Imagelist