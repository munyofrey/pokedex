export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";

export const receiveAllPokemon = (response) => ({
  type: RECEIVE_ALL_POKEMON,
  response
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});
