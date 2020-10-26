import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props){
        super(props)

        this.state = {
            sum: 0,
        }
    }

    handleClick=(onIncrease)=>{
        this.setState(({count})=>({count:count+1}))
    }

    render() {
        return (
            <div>
                <label htmlFor="sum">Sum of all numbers: </label>
            </div>
        )
    }
}

export default CounterGroupSum;