// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state= {count:0}
  getRandamNumber=()=> Math.ceil((Math.random()*100))
  OnIncrement= ()=> {
    const RandomNumber= this.getRandamNumber()
    this.setState((prevState) => ({count:prevState.count + RandomNumber}))
  }
  render() {
    const {count}=this.state
    const DisplayText= (count %2 === 0) ? "Even" : "Odd"
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="sub-heading"> Count is {DisplayText}</p>
          <button className="button" type="button" onClick={this.OnIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
