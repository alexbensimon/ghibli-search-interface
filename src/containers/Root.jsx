// @flow

import React from 'react';
import { connect } from 'react-redux';

import { fetchFilms } from '../actions/filmActions';
import type { Film } from '../flowTypes/filmType';

import FilmList from '../components/FilmList';

type Props = {
  films: Film[],
  fetchFilms: Function,
};

class Root extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {
    return this.props.films.length ? (
      <FilmList films={this.props.films} />
    ) : (
      <h1>Fetching films...</h1>
    );
  }
}

export default connect(state => ({ films: state }), { fetchFilms })(Root);
