import React, { Component } from 'react'
import axios from "axios"
import styles from "./PokemonList.module.css"

    
export default class PokemonList extends Component {
  state = {
    pokemons:[],
  };

  componentDidMount(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964`)
    .then(res =>{
        console.log(res.data.results)

      this.setState({ pokemons: res.data.results })
    })

    //?offset=20&limit=20
  }
  render() {
  return(
      <div>
        <form>
            {this.state.pokemons.map(pokemon => <div  key={pokemon.id}> the pokemon name is: {pokemon.name}</div>)}
        </form>  
      </div>
  )  
    }
}

