import React from "react"
import { Text } from "react-native"

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            doubleCount: props.count
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.count > this.state.doubleCount) {
            this.setState({ doubleCount: this.props.count * 2 });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;    
    }

    componentDidMount(){
        console.log('MOUNT');
    }

    componentWillUnmount(){
        console.log('UNMOUNT');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DIDUPDATE', prevProps, this.props);  
    }

    render() {
        return (
            <Text>{this.state.doubleCount}</Text>
        )
    }
}

export default Counter;