import React from "react";
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  _handleClick() {
    console.log("i clicked :)",this.props.router);
    this.props.router.push(`pokemon/${this.props.pokemon.id}`);
  }

  render() {

    return( <li className="pokemon-index-item" onClick={this._handleClick.bind(this)}>
        <span>{this.props.pokemon.name}</span>
        <img src={this.props.pokemon.image_url}/>
        <span>{this.props.pokemon.poke_type}</span>
    </li>);
  }

}

export default withRouter(PokemonIndexItem);
