import React from 'react';

import Header from './header.jsx';
import Landing from './landing.jsx';

export default class App extends React.Component {
  render() {
    return (<div>
      <Header />
      <Landing />
    </div>);
  }
}
