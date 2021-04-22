import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createProduct } from '../utils';
import ItemList from '../components/ItemList';
import AppState from './Index';
import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from 'react';

class Store extends React.Component {
    //const [copiedText, setCopiedText] = useState('');
    state = {
        list: [],
        countSelected: 0,
        text: ''
    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        try {
            const persistedStateList = await AsyncStorage.getItem('list');
            const persistedStateCount = await AsyncStorage.getItem('countSelected');
            if (!persistedStateList) return
            this.setState({
                list: JSON.parse(persistedStateList),
                countSelected: JSON.parse(persistedStateCount)
            })
        } catch (e) {
            console.error(e)
        }
    }

    persistState = (newState) => {
        this.setState(newState, async () => {
            try {
                await AsyncStorage.setItem('list', JSON.stringify(this.state.list))
                await AsyncStorage.setItem('countSelected', JSON.stringify(this.state.countSelected))
            } catch (e) {
                console.error(e)
            }
        })
    }

    addItem = (itemName) => {
        const { list } = this.state;
        if (itemName != "") {
            list.push(createProduct(itemName));
            this.persistState({ list });
        }
    }

    getProductIndexById = (id) => {
        return this.state.list.findIndex((product) => {
            return product.id === id
        })
    }

    deleteItem = (id, isswitch) => {
        const { list, countSelected } = this.state;
        list.splice(this.getProductIndexById(id), 1);
        this.persistState({ list });
        if (isswitch)
            this.persistState({ countSelected: countSelected - 1 });
    }

    toggleSwitch = (item, id) => {
        const { list, countSelected } = this.state;
        const selected = list[this.getProductIndexById(id)].isSelected;
        list[this.getProductIndexById(id)].isSelected = !selected;
        if (!item == true)
            this.persistState({ countSelected: countSelected + 1 });
        else this.persistState({ countSelected: countSelected - 1 });
    }

    isListFull = () => {
        const { list } = this.state;
        list.splice(0, list.length);
        this.persistState({ list, countSelected: 0 })
    }

    renderItem = ({ item }) => {
        return (
            <ItemList
                {...item}
                toggleSwitch={this.toggleSwitch}
                deleteItem={this.deleteItem}
            />
        )
    }

    onCopy = () => {
        Clipboard.setString('Hellooooooooooo');
        //console.log('copy');
    }
    
    onPaste = async () => {
        this.setState({text: await Clipboard.getString()});
        //console.log('Paste');
    }

    render() {

        console.log(this.state);
        return (
            <AppState.Provider
                value={{
                    list: this.state.list,
                    countSelected: this.state.countSelected,
                    addItem: this.addItem,
                    isListFull: this.isListFull,
                    renderItem: this.renderItem,
                    onCopy: this.onCopy,
                    onPaste: this.onPaste,
                    text: this.state.text
                }}
            >
                {this.props.children}
            </AppState.Provider>
        )
    }
}

export default Store;