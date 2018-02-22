import React, {Component} from 'react';



class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userAnswer:''
     }
 }
checkAnswer(){
  this.setState({
   userAnswer:this.props.value
  });
}
 //on click z value wrzucic do state
  render() {

  const shuffleArray =  [...this.props.answers].sort(() => Math.random() - 0.5);
  return (
  <section style={{
        border: '1px solid red'
      }}>
        <div>
          <h3>{this.props.question}</h3>
        </div>
        {shuffleArray.map(answer => (
          <div>
          <label>
            <input type="radio" className="radio" value={answer} name="answer" onClick={this.checkAnswer}/>{answer}</label>
          </div>
        )
      )
    }
    <button onClick={this.props.givePoints}>SUBMIT</button>
  </section>
    )
  }
}

export default Task;
