import React, {Component} from 'react';


class TaskAnswerA extends React.Component {

  render() {
    return (
      <label>A)
        <input type="checkbox" class="radio" value="1" name="same"/>Answer 1</label>
    )
  }
}

class TaskAnswerB extends React.Component {

  render() {
    return (
      <label>B)
        <input type="checkbox" class="radio" value="1" name="same"/>Answer 2</label>
    )
  }
}

class TaskAnswerC extends React.Component {

  render() {
    return (
      <label>C)
        <input type="checkbox" class="radio" value="1" name="same"/>Answer 3</label>
    )
  }
}

class TaskAnswerD extends React.Component {

  render() {
    return (
      <label>D)
        <input type="checkbox" class="radio" value="1" name="same"/>Answer 4</label>
    )
  }
}

class Task extends React.Component {

  
  render() {

    return (
      <section style={{
        border: '1px solid red'
      }}>
        <div>
          <h3>PYTANIE</h3>
        </div>
        <div>
          <TaskAnswerA/>
          <TaskAnswerB/><br/>
          <TaskAnswerC/>
          <TaskAnswerD/>
        </div>
      </section>
    )
  }
}

export default Task;
