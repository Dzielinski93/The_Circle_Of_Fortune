import React, {Component} from 'react';

class Header extends React.Component {


    render() {
      const headerBackground = {
       backgroundColor: 'black',
       width: '100%',
       height: '200px',
       color:  'white',
       fontSize: '30px'
        }
      return (
        <section style={headerBackground}>
          <div className="title">
          The Circle of Fortune !
          </div>
        </section>
      )
    }
  }


export default Header;
