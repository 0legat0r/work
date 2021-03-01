import React from "react";
import { Text, TextInput, View } from "react-native";
import Button from "./components/Button";
import Counter from "./components/Counter";
import UselessTextInput from "./components/UselessTextInput";
import UselessNumberInput from "./components/UselessNumberInput";

class App extends React.Component {
  state = {
    usrNm: '',
    usrAge: 18,
    count: 0,
    entr: false
  }

  setusrNm = (inputText) => {
    this.setState({ usrNm: inputText })
  }
  setusrAge = (inputText) => {
    this.setState({ usrAge: inputText })
  }
  setDone = () => {
    this.setState({ entr: true })
  }

  render() {
    if (this.state.entr)
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Your Name:</Text>
          <Text>{this.state.usrNm}</Text>
          <Text>Your Age:</Text>
          <Text>{this.state.usrAge}</Text>
        </View>

      )

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Name</Text>
        <TextInput
          onChangeText={this.setusrNm}
          placeholder="_______"
        />
        <Text>Age</Text>
        <TextInput
          onChangeText={this.setusrAge}
          placeholder="_______"
        />
        <Button setDone={this.setDone} />
        {this.state.entr && (<TextInput />)}
      </View>

    )
  }
}
export default App;
