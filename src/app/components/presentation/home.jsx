import React, { Component } from 'react';
import MainHeader from './mainHeader';
import InputLink from './inputText';

class IndexComponent extends Component {
  render() {
    return (
      <div>
        <MainHeader header="Home"></MainHeader>
        <InputLink></InputLink>
      </div>
    );
  }
}

export default IndexComponent;
