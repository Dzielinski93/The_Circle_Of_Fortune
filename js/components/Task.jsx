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
            <input type="radio" className="radio" value="1" name="same"/>{answer}</label>

          </div>
        )
      )
    }
    <button>SUBMIT</button>
  </section>
    )
  }
}

export default Task;
