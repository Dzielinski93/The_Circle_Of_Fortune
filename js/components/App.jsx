import React, {Component} from 'react';
import Header from './Header.jsx';
import User from './User.jsx';
import Circle from './Circle.jsx';
import Task from './Task.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    allData: null,
    answers: [],
    question: ''
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
      console.log(data.results);
      this.setState({
        allData:data.results
      })
    })
}

counter() {
    return Math.floor((Math.random() * 50) + 1)
}

getOneQuestion(){
  this.setState({
   question: all.data[counter()].question
  });
}

render() {
console.log(this.state.question);
      return (
        <section>
          <Header/>
          <User/>
          <Circle/>
          <Task answers={this.state.answers} question={this.state.question}/>
          <Footer/>
        </section>
      )
    }
  }


export default App;
