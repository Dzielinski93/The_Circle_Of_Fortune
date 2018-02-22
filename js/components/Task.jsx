import React, {Component} from 'react';



class Task extends React.Component {


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
            <input type="radio" className="radio" value={answer} name="answer"/>{answer}</label>
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
