import React, {Component} from 'react';

class Palindrome extends Component{

    constructor(){
        super();
        this.state ={
            userInput:'',
            palindrome: '',
        }
    }

    handleChange (element) {
        this.setState({userInput: element})
        // console.log('hit')
    }

    checkPalindrome(){
        const string = this.state.userInput
        this.setState({palindrome: 'true'})

        for(let i = 0; i< string.length / 2; i++){

            if (string.charAt(i) !== string.charAt(string.length - i - 1)){
                // console.log('hit')
                this.setState({palindrome: 'false'})
            }
        }
    }


    render(){
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => {this.handleChange(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => this.checkPalindrome()}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;