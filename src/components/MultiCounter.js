import React, { Component } from 'react';
import CounterSizeGenerate from './CounterSizeGenerate';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum : 0, 
            size: 0
        }
    }
    
    onSizeChange = (size) => {
        this.setState({size});
    }

    sumOfAll = (valueToAdd) => {
        this.setState((prevNumState) => ({sum : prevNumState.sum + valueToAdd}));
    }
    
    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGenerate onSizeChange={this.onSizeChange}/>
                    <CounterGroupSum sum={this.state.sum}/>
                </fieldset>
                <CounterGroup size={this.state.size} sumOfAll={this.sumOfAll}/>
            </div>
        );
    }
}

export default MultiCounter;