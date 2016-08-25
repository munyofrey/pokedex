import React from "react";
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return( <li>{this.props.pokemon.name}</li>)
  }

}

export default withRouter(PokemonIndexItem);
