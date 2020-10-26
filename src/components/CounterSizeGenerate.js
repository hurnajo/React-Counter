import React, { Component } from 'react';

class CounterSizeGenerate extends Component {
    constructor(props) {
        super(props);
        this.state = {size: 0}
    }
    
    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {size: value}
        }, () => {
            this.props.onSizeChange(value);
        });
    }
    

    render() {
        return (
            <div>
                <label htmlFor="size"> Number of Counters: </label>
                <input  type="number"  name="size" id="size"value= {this.state.size}
                        onChange={this.onChange} min="0"onInput="validity.valid||(value='')"/>
            </div>
        );
    }
}

export default CounterSizeGenerate;