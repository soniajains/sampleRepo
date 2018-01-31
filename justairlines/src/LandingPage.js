import React, {Component} from 'react';
import Header from './components/header.js';
import LeftNavigation from './components/LeftNavigation.js';
import RightNavigation from './components/RightNavigation.js';
export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <LeftNavigation></LeftNavigation>
      <RightNavigation></RightNavigation>
      </div> );
  }
}
