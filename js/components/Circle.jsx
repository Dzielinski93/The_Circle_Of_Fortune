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
      <section className="dupa">
        <div>
          SCORE: {this.props.points}
        </div>
        <div>
          {this.props.wrongAnswer}
        </div>
        <div>
          <img src="../images/adrian_s_wheel_of_fortune_r3_by_packardadrian-d6rdol1.png" alt="" style={{
            transform: `rotate(${this.props.degree}deg)`,
            transition: " all 4s linear"
          }}/>
        </div>
      </section>
    )
  }
}

export default Circle
