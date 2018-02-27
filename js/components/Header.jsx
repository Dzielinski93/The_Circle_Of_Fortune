import React, {Component} from 'react';
import '../../sass/Header.scss'


//nagłówek 
class Header extends React.Component {

  render() {
    return (
     <div className="body">
        <link href='https://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700' rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=Sancreek' rel='stylesheet' type='text/css'/>
        <span data-text="The Circle Of Fortune!" className="dashed-shadow hello">The Circle Of Fortune!</span>
     </div>
    )
  }
}

export default Header;
