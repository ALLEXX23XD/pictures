import { useState } from "react"
import './searchBar.css'


const searchBar = (onSubmit) => {
  const[term, setTerm]= useState('')

  const handleFormSubmit= (event) =>{
    event.preventDeafault()
    console.log('Necesito decirle al componente papa sobre los datos')
    onSubmit(term)
  }
const handleChange= (event)=> {
  setTerm(event.target.value)

}
console.log('term',term)

  return (
   <div className="searchBar">
      <form onSubmit={handleChange}>
        <label>Termino de la busqueda: </label>
        <input onChange={handleChange} value={term} />
      </form>
   </div> 

  )
}

export default searchBar