import React from "react"
import { Text } from "react-native"

class Counter extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            doubleCount: props.count
        }
    }
    
    render() {
        return (
            <Text>{this.props.count}</Text>
        )
    }
}

export default Counter;