import React from "react";
import { View, Dimensions, StyleSheet, FlatList } from 'react-native';
import AddButton from '../../components/AddButton';
import FinalButton from '../../components/FinalButton';
//import AppState from '../../store/Index';
import { withState } from "../../hoc/withState";

class Home extends React.Component {
  navigateCreateProduct = () => {
    const { navigation } = this.props;
    navigation.navigate('create-product')
  }

  render() {
    const { list, renderItem, countSelected, isListFull } = this.props;
    return (
      <View style={styles.main}>
        {/* <AppState.Consumer>{
          ({ list, renderItem, countSelected, isListFull }) => ( */}
        <View style={styles.listView}>
          <FlatList
            style={styles.list}
            data={list}
            renderItem={renderItem}
            keyExtractor={(product) => product.id}
          />
          <FinalButton
            count={countSelected}
            length={list.length}
            isListFull={isListFull}
          />
        </View>
        {/*           )
        }
      </AppState.Consumer> */}
        <AddButton
          onPress={this.navigateCreateProduct}
        />
      </View>
    )
  }
}

export default withState(Home);

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120
  },
  list: {
    flex: 1,
    marginTop: 15
  },
  listView: {
    flex: 1
  }
})