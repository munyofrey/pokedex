
import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';
import PokemonIndexItem from './pokemon/pokemon_index_item';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={PokemonIndexContainer} onEnter={store.dispatch(ACTIONS.requestAllPokemon())} >
        <Route path="pokemon/:id" component={PokemonIndexItem}/>
      </Route>
    </Router>
  </Provider>

);


export default Root;
