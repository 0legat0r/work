import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import ButtonSwitch from "./components/ButtonSwitch";
import Button from "./components/Button"

const picture1 = {
  id: 0,
  image: 'https://sun9-69.userapi.com/4_I2WiY4FaIQCFueYUI0TjTA15HJsf1Z-F1zEw/d1VCyAoD9fI.jpg',
  name: 'Нет блин, после после чебурек'
}
const picture2 = {
  id: 1,
  image: 'https://sun9-55.userapi.com/ei6vjP2ysu-MOeiwy-aYSFmAZrLnxf_zN1Y-5Q/8l7_uEXH5R4.jpg',
  name: 'Горжусь'
}

const picture3 = {
  id: 2,
  image: 'https://sun9-36.userapi.com/qX1-F_g91y9N9LZIg2gi8NCEmgk5Et0Jhr8YRw/CdVcIcNyLAM.jpg',
  name: 'Введите ответ'
}

const picture4 = {
  id: 3,
  image: 'https://sun9-61.userapi.com/0mpULAvYBLA7G4sSzLUGJ_eEx_IIMMpQgTX98g/AtIgw9qqF_c.jpg',
  name: 'Рубль упал...'
}

const picture5 = {
  id: 4,
  image: 'https://sun9-61.userapi.com/JonlikTX-2iZug7xdWqw_XeERIIUaIGYwXcCDg/4cx-YigI74M.jpg',
  name: 'Я живу в антидеприсантах, еее'
}


const categories = [
  {
    id: 0,
    name: "Pizza",
    picture: [picture1]
  },
  {
    id: 1,
    name: "Monument",
    pict: [picture2, picture3,picture4]
  },
  {
    id: 2,
    name: "Goodbye",
    picture: [picture5]
  },
  {
    id: 3,
    name: "Extra",
    picture: []
  }
]





class App extends React.Component {
  state = {
    status1: false,
    status2: false,
    status3: false,
    status4: false
  }
  toggleSwitch1 = () => {
    this.setState({ status1: !this.state.status1 })
  };
  toggleSwitch2 = () => {
    this.setState({ status2: !this.state.status2 })
  };
  toggleSwitch3 = () => {
    this.setState({ status3: !this.state.status3 })
  };
  toggleSwitch4 = () => {
    this.setState({ status4: !this.state.status4 })
  };

  render() {

    const renderItem = ({ item }) => (
      <View >
        {this.state.status1 && <Button picture={item.picture1} />}
        {this.state.status1 && <Text style={{ flex: 1, textAlign: "center", color: 'green', fontSize: 30 }}>{item.text1}</Text>}
        {this.state.status2 && <Button picture={item.picture2} />}
        {this.state.status2 && <Text style={{ flex: 1, textAlign: "center", color: 'green', fontSize: 30 }}>{item.text2}</Text>}
        {this.state.status3 && <Button picture={item.picture3} />}
        {this.state.status3 && <Text style={{ flex: 1, textAlign: "center", color: 'green', fontSize: 30 }}>{item.text3}</Text>}

      </View>
    );

    return (
      <View
        style={{
          display: "flex",
          alignItems: "center"
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <ButtonSwitch
            name="Pizza"
            status={this.state.status1}
            toggleSwitch={this.toggleSwitch1}
          />
          <ButtonSwitch
            name="Monument"
            status={this.state.status2}
            toggleSwitch={this.toggleSwitch2}
          />
          <ButtonSwitch
            name="Goodbye"
            status={this.state.status3}
            toggleSwitch={this.toggleSwitch3}
          />
          <ButtonSwitch
            name="Extra"
            status={this.state.status4}
            toggleSwitch={this.toggleSwitch4}
          />

        </ScrollView>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={item => item.text2}
        />
      </View>
    )
  }
}
export default App;

