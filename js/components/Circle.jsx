import React, {Component} from 'react';
import points from './Points';
import '../../sass/Circle.scss'

class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomDegree: null,
      points: null
    }
  }

  render() {
    return (
      <section className="circleSection">
        <div className="pointsCircleContainer">
        <div className="score">
          SCORE: {this.props.points}
        </div>
        <div>
          {this.props.wrongAnswer}
        </div>
        <div className="triangle">
          <img src="../images/adrian_s_wheel_of_fortune_r3_by_packardadrian-d6rdol1.png" alt="" className='myCircle' style={{
            transform: `rotate(${this.props.degree}deg)`,
            transition: " all 4s linear"
          }}/>
        </div>
        </div>
      </section>
    )
  }
}

export default Circle
