import React, {Component} from 'react';
import Rotation from 'react-rotation'
import Header from './Header.jsx';
import User from './User.jsx';
import Circle from './Circle.jsx';
import Task from './Task.jsx';
import Footer from './Footer.jsx';
import points from './Points';
import '../../sass/App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: null,
      answers: [],
      question: '',
      rightAnswers: '',
      randomDegree: 0,
      degreePoints: 0,
      pointsSum: 0,
      answerOfUser: '',
      wrongAnswer: '',
      userName: null
    }

    fetch(`https://opentdb.com/api.php?amount=50&category=18&type=multiple`).then(response => {
      if (response.ok) {

        return response.json();
      } else {
        throw new Error('err');
      }
    }).then(data => {
      this.setState({
        allData: data.results
      }, () => {
        const degreeNumber = this.circleCounter()
        const number = this.counter()
        const pointsDegree = points[degreeNumber].fieldEffect
        const answers = this.state.answers
      })
    })
  }

  counter() {
    return Math.floor((Math.random() * 49))
  }

  circleCounter() {
    return Math.floor((Math.random() * 23))
  }

  getRandomDegree(degreeNumber) {
    const newDegree = points[degreeNumber].rotateDegree
    this.setState({randomDegree: newDegree});
  }

  getDegreePoints(degreeNumber) {
    const pointsDegree = points[degreeNumber].fieldEffect

    this.setState({degreePoints: Number(pointsDegree)});
  }

  getOneQuestion(number) {
    this.setState({question: this.state.allData[number].question});
  }

  getAnswers(number) {
    const rightAnswer = this.state.allData[number].correct_answer
    const wrongAnswers = this.state.allData[number].incorrect_answers
    const newAnswers = [
      rightAnswer, ...wrongAnswers
    ]
    this.setState({answers: newAnswers, rightAnswers: rightAnswer});
  }

  checkBankrupt(pointsDegree) {
    if (pointsDegree === 'bankrupt') {
      this.setState({pointsSum: 0})
    }
  }

  clearError() {
    this.setState({wrongAnswer: ''})
  }

  getTaskDetails() {
    const number = this.counter()
    const degreeNumber = this.circleCounter()
    const pointsDegree = points[degreeNumber].fieldEffect
    this.getAnswers(number)
    this.getOneQuestion(number)
    this.getRandomDegree(degreeNumber)
    this.getDegreePoints(degreeNumber)
    this.checkBankrupt(pointsDegree)
    this.clearError()
  }

  getName(name) {
    this.setState({userName: name})
  }

  userAnswerEvent = (isRightAnswer) => {

    if (isRightAnswer) {
      this.setState({
        pointsSum: this.state.pointsSum + this.state.degreePoints
      })
    } else {
      this.setState({
        wrongAnswer: 'WRONG ANSWER'
      })
    }
  }

  render() {
    // console.log(this.state.rightAnswers);
    return (
      <section>
        <Header/>
        <User userName={this.state.userName} onButtonClick={this.getName.bind(this)}/>
        <Circle degree={this.state.randomDegree} points={this.state.pointsSum} wrongAnswer={this.state.wrongAnswer} method={this.userAnswerEvent}/>
        <Task isQuestionAvailable={!!this.state.question} method={this.userAnswerEvent} answers={this.state.answers} question={this.state.question} rightAnswer={this.state.rightAnswers} points={this.state.pointsSum} degreePoints={this.state.degreePoints} onSubmit={this.getTaskDetails.bind(this)}
        wrongAnswer={this.state.wrongAnswer}/>

        <Footer/>

      </section>
    )
  }
}

export default App;
