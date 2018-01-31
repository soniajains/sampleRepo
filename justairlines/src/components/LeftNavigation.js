import React, {Component} from 'react';

export default class LeftNavigation extends Component {


  getListItem() {
    const menuList = ["About", "Contacts" , "Profile" ];
    return (menuList.map(function(menu) {
      console.log('value inside map',menu);
      return <li key={menu}>{menu}</li>
    }));

  }

  render() {
    return (
      <div className="sidenav">
        {this.getListItem()}
      </div> );
  }
}
