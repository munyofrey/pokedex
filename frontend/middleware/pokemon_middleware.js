import {fetchAllPokemon} from '../util/api_util';
import * as ACTIONS from '../actions/pokemon_actions';

export default ({getState, dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case ACTIONS.REQUEST_ALL_POKEMON:
        success = (data) => dispatch(ACTIONS.receiveAllPokemon(data));
        fetchAllPokemon(success);
      break;
    default: next(action);

  }
};
