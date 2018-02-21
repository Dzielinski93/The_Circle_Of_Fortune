import React, {Component} from 'react';

class Footer extends React.Component {


    render() {
      const footerBackground = {
       backgroundColor: 'black',
       width: '100%',
       height: '50px',
       color:  'white',
       fontSize: '10px'
        }
      return (
        <section style={footerBackground}>
          <div className="footer">
          Copyrights 2018 Made by Dejw :)
          </div>
        </section>
      )
    }
  }


export default Footer;
