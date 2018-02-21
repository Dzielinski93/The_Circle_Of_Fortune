import React, {Component} from 'react';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      name: ''

    };
  }

  changeInput = (event) => {

    this.setState({

      [event.target.id]: event.target.value

    })

  }

  render() {
    return (
      <section style={{
        border: '1px solid red'
      }}>
        <div>
          <form action=""onChange={this.changeInput}>
            <label>Your Name :
              <input id="name" type="text"  value={this.state.name}/>
            </label>
            <input type="submit" value="SUBMIT"  />
          </form>
        </div>
        <div>
          Name: {this.state.name}
        </div>
        
      </section>
    )

  }
}

export default User;
