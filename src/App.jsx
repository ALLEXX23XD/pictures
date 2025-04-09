import { useState } from "react"
import SearchBar from "./components/SearchBar"
import Imagelist from "./components/Imagelist"
import searchImages from "./api"



function App() {
//searchImages('cars')
const [images, setImages]= useState([])

const handlesubmit= async(term) =>{
  console.log('usted esta buscando con ', term)
  const result = await searchImages(term)
  setImages(result)
}
  return (
    <>
      <h1>pictures App</h1>
      
      <SearchBar onSubmit= {handlesubmit} />
      <Imagelist images= {images} />

    </>
  )
}

export default App
