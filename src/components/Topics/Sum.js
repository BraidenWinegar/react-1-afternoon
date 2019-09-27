import React, {Component} from 'react';

class Sum extends Component{

    constructor(){
        super();
        this.state ={
            number1: 0,
            number2: 0,
            Sum: 0
        }
    }

    handleChange1 (element) {
        this.setState({number1: element})
        // console.log('hit')
    }

    handleChange2 (element) {
        this.setState({number2: element})
        // console.log('hit')
    }

    addSum() {
        this.setState({
            sum: Number(this.state.number1) + Number(this.state.number2)
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => {this.handleChange1(e.target.value)}}></input>
                <input className="inputLine" onChange={e => {this.handleChange2(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => this.addSum(this.state.userInput)}>Add</button>
                <span className="resultsBox filterStringRB">Sum:  {this.state.sum}</span>

            </div>
        )
    }
}

export default Sum;