// @flow

import React from 'react';

type Props = {
  property: string,
  value: string,
  onValueChange: Function,
};

export default function Filter(props: Props) {
  return (
    <div>
      <label htmlFor={props.property}>{props.property}</label>
      <input
        type="text"
        value={props.value}
        onChange={e => props.onValueChange(props.property, e.target.value)}
      />
    </div>
  );
}
