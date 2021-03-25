import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import ButtonSwitch from "./components/ButtonSwitch";
import Button from "./components/Button"
import Categories from './components/Categories'

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

  render() {


    return (
      <Categories />
    )
  }
}
export default App;

