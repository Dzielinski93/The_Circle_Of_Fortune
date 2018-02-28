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
      <section className="cirofort-main">
        <div className="cirofort-main__container">
          <div className="cirofort-main__container--for-triangle">
            <img src="../images/adrian_s_wheel_of_fortune_r3_by_packardadrian-d6rdol1.png"
            alt=""
            className='cirofort-main__container--fortune-circle'
            style={{
              transform: `rotate(${this.props.degree}deg)`,
              transition: " all 4s ease-in-out 1.5s"
               }
              }
             />
          </div>
          <div className="cirofort-main__container--score">
              SCORE: {this.props.points}
          </div>
        </div>
      </section>
    )
  }
}

export default Circle
