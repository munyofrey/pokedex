import {requestAllPokemon} from "../../actions/pokemon_actions";
import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';
import allPokemons from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  pokemon: allPokemons(state)

});

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
