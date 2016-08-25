import * as ACTIONS from '../actions/pokemon_actions';
import {merge} from 'lodash';


const PokemonReducer = (state = {}, action)=> {
  switch (action.type) {
    case ACTIONS.RECEIVE_ALL_POKEMON:
      return merge({},state,action.response);
    default:
      return state;

  }
};

export default PokemonReducer;
