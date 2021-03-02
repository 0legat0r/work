import React from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";

const project = [{
  photo: 'https://wallpapercave.com/wp/wp4943119.png',
    },
    {
  photo: 'http://www.zoovet.ru/images/cats_clich.jpg',
    },
    {
  photo: 'http://cat-lifes.com/wp-content/uploads/2015/03/smeshnye-kartinki-tancuyushhix-kotov-4.jpeg',
    },
  ]

class App extends React.Component {
  
  state = {
    count: 0,
    entr: false
  }

  right = () => {
    this.setState({})
  }

  left = () => {
    this.setState({})
  }

  increase =() =>{	  
    this.setState({ count: this.state.count + 1})	    
  }

  reduce =() =>{	  
    this.setState({ count: this.state.count - 1})	    
  }
  
  setDone = () => {
    this.setState({ entr: true })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        
        
        {this.state.count == 1 && <Image
        style={{
          width: 350,
          height: 350,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />}
        {this.state.count == 0 && <Image
        style={{
          width: 350,
          height: 350,
        }}
        source={{
          uri: 'https://wallpapercave.com/wp/wp4943119.png',
        }}
      />}
        {this.state.count != 0 && <ButtonLeft reduce = {this.reduce}/>}
        {this.state.count != 5 && <ButtonRight increase={this.increase}/>}
      </View>

    )




  }
}
export default App;
