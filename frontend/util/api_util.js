
export const fetchAllPokemon = (success, error) =>{
  $.ajax({
    url: '/api/pokemon',
    success,
    error
  });
};
