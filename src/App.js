import React from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";

let photo = [
  'https://sun9-69.userapi.com/4_I2WiY4FaIQCFueYUI0TjTA15HJsf1Z-F1zEw/d1VCyAoD9fI.jpg',
  'https://sun9-55.userapi.com/ei6vjP2ysu-MOeiwy-aYSFmAZrLnxf_zN1Y-5Q/8l7_uEXH5R4.jpg',
  'https://sun9-36.userapi.com/qX1-F_g91y9N9LZIg2gi8NCEmgk5Et0Jhr8YRw/CdVcIcNyLAM.jpg',
  'https://sun9-61.userapi.com/0mpULAvYBLA7G4sSzLUGJ_eEx_IIMMpQgTX98g/AtIgw9qqF_c.jpg',
  'https://sun9-61.userapi.com/JonlikTX-2iZug7xdWqw_XeERIIUaIGYwXcCDg/4cx-YigI74M.jpg'
]

var tetx = [
  'Нет блин, после после чебурек',
  'Горжусь',
  'Введите ответ',
  'Рубль упал...',
  'Я живу в антидеприсантах, еее'
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

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  reduce = () => {
    this.setState({ count: this.state.count - 1 })
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

        <Image
          style={{
            width: 350,
            height: 350,
            resizeMode: 'stretch'
          }}
          source={{
            uri: photo[this.state.count]
          }}
        />
        <Text style={{
          color: 'green',
          fontWeight: 'bold',
          fontSize: 30,
        }}>{tetx[this.state.count]}</Text>
        {this.state.count != 0 && <ButtonLeft reduce={this.reduce} />}
        {this.state.count != 4 && <ButtonRight increase={this.increase} />}
      </View>

    )




  }
}
export default App;
