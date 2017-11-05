// @flow

import React from 'react';
import ReactTable from 'react-table';

import type { Film } from '../flowTypes/filmType';

type Props = {
  films: Film[],
};

export default function FilmTable(props: Props) {
  // Parse number properties to be correctly sorted by React Table
  const normalizedFilms = props.films.map(film => ({
    ...film,
    release_date: parseInt(film.release_date, 10),
    rt_score: parseInt(film.rt_score, 10),
  }));
  return (
    <ReactTable
      data={normalizedFilms}
      columns={[
        {
          Header: 'Title',
          accessor: 'title',
        },
        {
          Header: 'Director',
          accessor: 'director',
        },
        {
          Header: 'Producer',
          accessor: 'producer',
        },
        {
          Header: 'Release date',
          accessor: 'release_date',
        },
        {
          Header: 'RT score',
          accessor: 'rt_score',
        },
      ]}
    />
  );
}
