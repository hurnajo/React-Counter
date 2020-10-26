import React, { Component } from 'react';
import CounterSizeGenerate from './CounterSizeGenerate';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props){
        super(props);

        this.onGenerate = this.onGenerate.bind(this);

        this.state = {size:0}
    }

    onGenerate(size){
        this.setState({size});
    }

    render() {
        return (
            <div>
                <CounterSizeGenerate onGenerate={this.onGenerate}/>  
                <CounterGroup size={this.state.size}/>     
            </div>
        );
    }
}

export default MultiCounter;