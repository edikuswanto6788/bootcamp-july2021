import React, { Component } from 'react'

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {

        const { label, type, name, change, value } = this.props
        return (
            <div>
                <span>{label}</span>
                <input type={type}
                    name={name}
                    onChange={change}
                    value={value}>
                    
                </input>
            </div>
        )
    }
}
export default RowInput;
