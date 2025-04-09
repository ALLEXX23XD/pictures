
const Imageshow = ({image}) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_descrption}/>

    </div>  
  )
}

export default Imageshow 