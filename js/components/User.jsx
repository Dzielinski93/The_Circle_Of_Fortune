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
            <label>Imię
              <input id="name" type="text"  value={this.state.name}/>
            </label>
            <input type="submit" value="Potwierdzam"  />
          </form>
        </div>
        <div>
          Name: {this.state.name}
        </div>
        <div>
          Points:
        </div>
      </section>
    )

  }
}

export default User;
