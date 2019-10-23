import React, { Component } from 'react'
import axios from "axios"
import styles from "./PokemonList.module.css"

    
export default class PokemonList extends Component {
  state = {
    pokemons:[],
  };

  componentDidMount(){
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
    .then(res =>{
      this.setState({ pokemons: res.data.results })
    })  
    //?offset=20&limit=20
  }

  test(pokeName) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokeName)
    .then(res => {
      console.log(res.data.sprites.front_default)
      return res.data.sprites.front_default
    })
  }

  render() {
  return(
      <div className={styles.container}>
        <form>
            {
              this.state.pokemons.map(pokemon =>
                <React.Fragment>            
                  <div key={pokemon.id}> the pokemon name is: {pokemon.name}</div>
                  <div>{this.data.sprites.front_default}</div>
                </React.Fragment>
              )
          }
        </form>  
      </div>
  )  
    }
}

