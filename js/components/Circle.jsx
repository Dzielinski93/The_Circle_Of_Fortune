import React, {Component} from 'react';
import points from './Points';

class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    randomDegree: null,
    points:null
    }
}

// bankrupt(){
//
// }
//
// looseAturn(){
//
// }
//
// points900(){
//
// }
// points300(){
//
// }
//
// points500(){
//
// }
//
// points200(){
//
// }
//
// points400(){
//
// }
// points550(){
//
// }
//
// points5000(){
//
// }
//
// points600(){
//
// }
//
// points700(){
//
// }
// points1500(){
//
// }
// points350(){
//
// }
// points250(){
//
// }
//
// getMyPoints(){
//   bankrupt()
//   looseAturn()
//   points900()
//   points300()
//   points500()
//   points200()
//   points400()
//   points550()
//   points5000()
//   points600()
//   points700()
//   points1500()
//   points350()
//   points250()
// }

circleCounter(){
  return Math.floor((Math.random() * 24) + 1)
}

// getOneDegree(){
//   this.setState({
//    randomDegree: this.points[circleCounter()].rotateDegree
//   });
// }

    render() {
      return (
        <section style={{border: '1px solid red'}}>
          <div>
            SCORE: {this.props.points}
          </div>
          <div>
             <img src="../images/adrian_s_wheel_of_fortune_r3_by_packardadrian-d6rdol1.png" alt="" style={{transform:
               `rotate(${this.props.degree}deg)`, transition:" all 4s linear"}}/>
          </div>
          <div>
             <button onClick={this.props.handleClick}>START</button>
          </div>
        </section>
      )
    }
  }


export default Circle
