import React from "react";
import { Button, FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";

const photos = [
  {
    picture: 'https://sun9-69.userapi.com/4_I2WiY4FaIQCFueYUI0TjTA15HJsf1Z-F1zEw/d1VCyAoD9fI.jpg',
    text: 'Нет блин, после после чебурек'
  },
  {
    picture: 'https://sun9-55.userapi.com/ei6vjP2ysu-MOeiwy-aYSFmAZrLnxf_zN1Y-5Q/8l7_uEXH5R4.jpg',
    text: 'Горжусь'
  },
  {
    picture: 'https://sun9-36.userapi.com/qX1-F_g91y9N9LZIg2gi8NCEmgk5Et0Jhr8YRw/CdVcIcNyLAM.jpg',
    text: 'Введите ответ'
  },
  {
    picture: 'https://sun9-61.userapi.com/0mpULAvYBLA7G4sSzLUGJ_eEx_IIMMpQgTX98g/AtIgw9qqF_c.jpg',
    text: 'Рубль упал...'
  },
  {
    picture: 'https://sun9-61.userapi.com/JonlikTX-2iZug7xdWqw_XeERIIUaIGYwXcCDg/4cx-YigI74M.jpg',
    text: 'Я живу в антидеприсантах, еее'
  }
]




class App extends React.Component {
  render() {
    const renderItem = ({ item }) => (
      <View>
        <Image
          style={{
            width: 350,
            height: 350
          }}
          source={{ uri: item.picture }} />
        <Text style={{
          color: 'green',
          fontSize: 30
        }}>{item.text}</Text>
      </View>
    );
    return (
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.text}
      />
    )
  }
}
export default App;

