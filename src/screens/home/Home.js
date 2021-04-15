import React from "react"
import { FlatList, StyleSheet, View, Button } from 'react-native'
import AddButton from "../../components/AddButton"
import { createProduct } from "../../utils"
import Product from "../../components/Product"
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  input: {
    flex: 1
  }
})

class Home extends React.Component {

  state = {
    shoplist: [],
  }

  componentDidMount(){
    this.init()
  }

  init = async () => {
    try{
      const persistedState = await AsyncStorage.getItem('shoplist');
      if (!persistedState) return
      this.setState({
        shoplist: JSON.parse(persistedState)
      })
    }catch(e){
      console.error(e)
    }
  }

  persistState = (newState) => {
    this.setState(newState, async () => {
      try{
        await AsyncStorage.setItem('shoplist', JSON.stringify(this.state.shoplist))
      }catch(e){
        console.error(e)
      }
    })
   
  }

  onAddProduct = () => {
    const { shoplist, productName } = this.state
    shoplist.push(createProduct(productName))
    this.persistState({ shoplist, productName: '' })
  }

  navigateCreateProduct = () => {
    const { navigation } = this.props
    navigation.navigate('create-product')
  }
  
  onSelect = (id) => {
    const { shoplist } = this.state

    const selected = shoplist[this.getProductIndexById(id)].isSelected;

    shoplist[this.getProductIndexById(id)].isSelected = !selected;

    this.setState({ shoplist })
  }

  
  onDelete = (id) => {
    const { shoplist } = this.state

    shoplist.splice(this.getProductIndexById(id), 1)

    this.persistState({ shoplist })
  }

  getProductIndexById = (id) => {
    return this.state.shoplist.findIndex(( product )=>{
      return product.id === id
    })
  }

  onComplete = () => {
    this.setState({ shoplist: [] })
  }

  renderItem = ({ item }) => {

    return (
      <Product
        {...item}
        onSelect={this.onSelect}
        onDelete={this.onDelete}
      />
    )
  }

  render() {

    const { shoplist } = this.state

    const countSelectedProducts = shoplist.reduce((prev, product)=>{
      if(product.isSelected){
        return prev + 1
      } else {
        return prev
      }
    }, 0)

    const allSelected = countSelectedProducts === shoplist.length 
        && shoplist.length > 0

    return (
      <View style={styles.root}>
        <FlatList
          data={shoplist}
          renderItem={this.renderItem}
          keyExtractor={(product) => product.id}
        />
        
        {allSelected && <Button title='complete' onPress={this.onComplete} />}
        <AddButton
            onPress={this.navigateCreateProduct}
          />
      </View>
    )
  }
}

export default Home;