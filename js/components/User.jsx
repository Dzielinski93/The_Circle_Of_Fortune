import React, {Component} from 'react';
import '../../sass/User.scss'
class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      name: '',
      empty: '',
      errorName:''

    };
  }


  changeInput = (event) => {
    event.preventDefault()
    this.setState({

      [event.target.id]: event.target.value

    })
  }

  clearInfo(){
    this.timeout = setTimeout(()=>{
    this.setState({
      errorName: '',
      });
    },3000)
  }

  render() {
    return (
      <section className='userSection'>
        <div className='user'>
          <div>
            <div className="errorMessage">
               <p>{this.state.errorName}</p>
            </div>
            <form
            className="form"
            action=""
            onChange={this.changeInput}>
              <input
              className="question"
              id="name"
              type="text"
              onChange={this.changeInput} value={this.state.name}/>
              <label for='name'>What's your name?
              </label>
              <button
              className="action-button shadow animate blue" onClick={(e) => {

              e.preventDefault()

              const nameButton = document.getElementsByClassName('action-button')

               if (this.state.name.length == 0) {

                 nameButton.disabled = true;

                 this.setState({

                   errorName: 'Please put your name and submit'

                 })
                 this.clearInfo()
               }else{
                e.preventDefault()

                this.props.onButtonClick(this.state.name)

                this.setState({
                  name: ''
                })
              }
            }
          }>
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
