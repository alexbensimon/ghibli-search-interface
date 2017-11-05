// @flow

import React from 'react';
import { connect } from 'react-redux';

import { modifyFilter } from '../actions/filterActions';
import type { Filter } from '../flowTypes/filterType';

import FilterComp from '../components/Filter';

type Props = {
  filters: Filter[],
  modifyFilter: Function,
};

class Filters extends React.Component<Props> {
  // eslint-disable-next-line no-undef
  handleFilterValueChange = (property: string, value: string) => {
    this.props.modifyFilter({ property, value });
  };

  render() {
    return this.props.filters ? (
      Object.entries(this.props.filters).map(filter => (
        <FilterComp
          key={filter[0]}
          property={filter[0]}
          value={filter[1]}
          onValueChange={this.handleFilterValueChange}
        />
      ))
    ) : (
      <h1>Fetching filters...</h1>
    );
  }
}

export default connect(state => ({ filters: state.filters }), { modifyFilter })(Filters);
