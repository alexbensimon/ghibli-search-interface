// @flow

import React from 'react';

import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <h1 className="App-title">Welcome to Ghibli Search Interface 😻🔍</h1>
    </header>
  );
}
