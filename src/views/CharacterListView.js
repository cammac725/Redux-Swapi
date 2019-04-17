import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <div> Loading data. Please wait...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
})


export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
