import React, {Component} from 'react';
import '../../sass/Task.scss'

class Task extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      shuffledQuestions: [...this.props.answers].sort(() => Math.random() - 0.5),
      userAnswer: '',
      pickAnswer: ''
    }
  }
//metoda aktualizująca propsy
  componentWillReceiveProps(nextProps) {
    if (nextProps.answers !== this.props.answers) {
      this.setState({
        shuffledQuestions: [...nextProps.answers].sort(() => Math.random() - 0.5)
      })
    }
  }


  checkAnswer = () => {
    this.setState({

      userAnswer: this.props.id

    });
  }
//zdarzenie które ma na celu najpierw sprawdzić czy odpowiedz udzielona przez użytkownika jest dobra.
  givePoints = () => {

    this.props.method(this.state.userAnswer == this.props.rightAnswer)

  }

  handleChange = (event) => {
     this.setState({
      [event.target.id]: event.target.value
    })
  }

  errorTime(){
    this.timeout = setTimeout(()=>{
    this.setState({
    pickAnswer: ''
      });
    },3000)
  }

  render() {

    return (
      <section className='taskSection'>
        <div className='allQuestion'>
           <div className="lives">
           <img
           className='heart' src="../images/41YYECsFLpL.png"
           alt=""/>
           <img
           className='heart' src="../images/41YYECsFLpL.png"
           alt=""/>
           <img
           className='heart' src="../images/41YYECsFLpL.png"
           alt=""/>
           </div>
           <div>
               <h3>
               {this.props.question}
               </h3>
           </div>
           {this.state.shuffledQuestions.map(answer => (

           <div className='tasks'>
            <label>
               <input
               type="radio"
               className="radio"
               value={answer}
               id='userAnswer'
               name="answer" onClick={this.checkAnswer} checked={this.state.userAnswer == answer} onChange={this.handleChange}/>{answer}</label>
          </div>
          )
         )
        }
           <div className='answer'>
              <p>
              {this.props.wrongAnswer}              {this.state.pickAnswer}
              </p><br/>
              <p>
              {this.props.looseTurn}
              </p>
           </div>
           <button
           className='action-buttons shadow animate blue'
           onClick={(e) => {
              e.preventDefault()
             if (!this.props.answers.length > 0) {
               this.props.handleGameStart()

             } else {
               const isChecked = (elem) => elem.checked

               const answers = document.querySelectorAll('input.radio')

               const checkedAnswers = Array.from(answers).filter(isChecked)

              if (checkedAnswers.length > 0) {

               this.givePoints()
               this.props.onSubmit()

          }else{

            this.setState({
            pickAnswer: 'PICK ONE ANSWER'
             });

            this.errorTime()
          }
        }
      }
    }>
          {this.props.isQuestionAvailable
            ? "SUBMIT"
            : "START"
          }
           </button>
        </div>
      </section>
    )
  }
}

export default Task;
