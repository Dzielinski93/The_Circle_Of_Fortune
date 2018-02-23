import React, {Component} from 'react';
import '../../sass/User.scss'
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
      <section className='userSection'>
        <div className='user'>
          <div>
            <form className="form" action="" onChange={this.changeInput}>

              <input className="question" id="name" type="text" onChange={this.changeInput} value={this.state.name}/>
              <label for='name'>
                <span>What's your name?</span>
              </label>
              <button className="action-buttons shadow animate blue" onClick={(e) => {
                e.preventDefault()
                this.props.onButtonClick(this.state.name)
                this.setState({name: ''})
              }}>
                SUBMIT
              </button>
            </form>
          </div>
        </div><br/>
        <div className='player'>
          Player: {this.props.userName && this.props.userName}
        </div>
      </section>
    )

  }
}

export default User;
