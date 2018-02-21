import React, {Component} from 'react';
import Rotation from 'react-rotation'
import Header from './Header.jsx';
import User from './User.jsx';
import Circle from './Circle.jsx';
import Task from './Task.jsx';
import Footer from './Footer.jsx';
import points from './Points';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    allData: null,
    answers: [],
    question: '',
    rightAnswers: '',
    randomDegree: null
    }

    fetch(`https://opentdb.com/api.php?amount=50&category=18&type=multiple`)

    .then(response => {
      if (response.ok) {
          console.log(response);
        return response.json();
      } else {
        throw new Error('err');
      }
    })

    .then(data => {
      this.setState({
        allData:data.results
      }, ()=>{
        const degreeNumber = this.circleCounter()
        const number = this.counter()
        this.getOneQuestion(number)
        this.getAnswers(number)
        this.getRandomDegree(degreeNumber)
      })
    })
}

counter() {
    return Math.floor((Math.random() * 50) + 1)
}

circleCounter(){
  return Math.floor((Math.random() * 24) + 1)
}

getRandomDegree(degreeNumber){

  this.setState({
   randomDegree: points[degreeNumber].rotateDegree
  });
}

getOneQuestion(number){
  this.setState({
   question: this.state.allData[number].question
  });
}

getAnswers(number){
  const rightAnswer = this.state.allData[number].correct_answer
  const wrongAnswers = this.state.allData[number].incorrect_answers
  const newAnswers = [rightAnswer, ...wrongAnswers]
  this.setState({
    answers: newAnswers,
    rightAnswers: rightAnswer
  });
}


getTaskDetails(){
  const number = this.counter()
  this.getAnswers(number)
  this.getOneQuestion(number)
  this.getRandomDegree(degreeNumber)
}

render() {
console.log(this.state.randomDegree);
      return (
        <section>
          <Header/>
          <User/>
          <Circle handleClick={this.getTaskDetails.bind(this)} degree={this.state.randomDegree}/>
          <Task answers={this.state.answers} question={this.state.question} rightAnswer={this.state.rightAnswers}/>
          <Footer/>

        </section>
      )
    }
  }



    export default App;
