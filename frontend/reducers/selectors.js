const allPokemons = (state) => {
  let keys = Object.keys(state);
  return keys.map((idx) => {
    return state[idx];
  });
};

export default allPokemons;
