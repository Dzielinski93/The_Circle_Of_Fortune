import React, {Component} from 'react';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      empty: ''
    };
  }

  changeInput = (event) => {
    event.preventDefault()
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
          <form action="" onChange={this.changeInput}>
            <label>Your Name :
              <input id="name" type="text" onChange={this.changeInput} value={this.state.name}/>
            </label>
            <button onClick={(e) => {
              e.preventDefault()
              this.props.onButtonClick(this.state.name)
              this.setState({name: ''})
            }}>
            SUBMIT
            </button>
          </form>
        </div>
        <div>
          Player: {this.props.userName && this.props.userName}
        </div>
      </section>
    )

  }
}

export default User;
