import React, {Component} from 'react';

class FilterObject extends Component{

    constructor(){
        super();
        this.state ={
            userInput: '',
            filteredArray: [],
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
            ]
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterEmployees (value) {
        let employees = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(value)) {
                filteredArray.push(employees[i]);
            }
        }

        this.setState({filteredArray: filteredArray})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)} </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;