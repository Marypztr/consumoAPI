import React, { Component } from 'react'
import axios from "axios"

    
export default class PokemonInput extends Component {
  state = {
    name:"",
  };

  handleChange = event =>{
      this.setState({name: event.target.value})
  }

  handleSubmit = event =>{
      event.preventDefault();
      const user={
          name:this.state.name,
      }
  }

  componentDidMount(){
    axios.post(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964`,{user})
    .then(res =>{
        console.log(res.data.results)
    })

    //?offset=20&limit=20
  }
  render() {
  return(
      <div>
 <form>
     <label>
         Pokemon name:{
             <input type="text" name="name"/>
         }
     </label>
     </form> 
      </div>
  )  
    }
}

