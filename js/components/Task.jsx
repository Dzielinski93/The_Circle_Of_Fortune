import React, {Component} from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffledQuestions: [...this.props.answers].sort(() => Math.random() - 0.5),
      userAnswer: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.answers !== this.props.answers) {
      this.setState({
        shuffledQuestions: [...nextProps.answers].sort(() => Math.random() - 0.5)
      })
    }
  }
  checkAnswer = () => {
    this.setState({userAnswer: this.props.id});
  }

  givePoints = () => {
    this.props.method(this.state.userAnswer == this.props.rightAnswer)

  }

  handleChange = (event) => {
     this.setState({
      [event.target.id]: event.target.value
    })
  }
  //on click z value wrzucic do state
  render() {

    return (
      <section style={{
        border: '1px solid red'
      }
    }>
        <div>
          <h3>{this.props.question}</h3>
        </div>
        {this.state.shuffledQuestions.map(answer => (
          <div>
            <label>
              <input type="radio" className="radio" value={answer} id='userAnswer' name="answer" onClick={this.checkAnswer} onChange={this.handleChange}/>{answer}</label>
          </div>
        )
      )
    }
        <button onClick={() => {
          this.givePoints()
          this.props.onSubmit()
        }}>
          {this.props.isQuestionAvailable
            ? "SUBMIT"
            : "START"
          }
        </button>

      </section>
    )
  }
}

export default Task;
