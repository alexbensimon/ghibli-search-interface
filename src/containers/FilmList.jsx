// @flow

import React from 'react';
import { connect } from 'react-redux';

import { fetchFilms } from '../actions/filmActions';
import type { Film } from '../flowTypes/filmType';

import FilmTable from '../components/FilmTable';

type Props = {
  films: Film[],
  fetchFilms: Function,
  filters: Object,
};

class FilmList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {
    // I don't know about you, but I'm in love with this code snippet 😇
    if (this.props.films.length) {
      const filteredFilms = this.props.films.filter(film =>
        Object.entries(this.props.filters).every(filter =>
          film[filter[0]].toLowerCase().includes(filter[1].toLowerCase()),
        ),
      );
      return <FilmTable films={filteredFilms} />;
    }
    return <h1>Fetching films...</h1>;
  }
}

export default connect(state => ({ films: state.films, filters: state.filters }), {
  fetchFilms,
})(FilmList);
