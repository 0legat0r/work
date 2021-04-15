import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import SpisokPokupok from './SpisokPokupok'
import CopyTest from './CopyTest'
import { AppStore } from '../AppStore';

idp = 0;

const Spisok = () => {
    const [pokupki, setPokupki] = useState(() => [
    ])

    const [text, setText] = useState('')

    changeText = text => setText(text)

    const addPokupki = () => {
        if (text.length > 0) {

            setPokupki([
                ...pokupki,
                { id: idp, name: text, isComplete: false }
            ])
           idp++; 
        }
        
        setText('');
    }

    const completePokupki = id => setPokupki(pokupki.map(
        pokupki => pokupki.id === id ? {...pokupki, isComplete: !pokupki.isComplete} : pokupki
    ))

    const delPokupki = id => setPokupki(
        pokupki.filter(pokupki => pokupki.id !== id)
    )

    const delPokupkiall = isComplete => setPokupki(
        pokupki.filter(pokupki => pokupki.isComplete !== true)
    )

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
      };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
      };

    return (
        <>
            <SpisokPokupok
                pokupki={pokupki}
                delPokupki = {delPokupki}
                completePokupki = {completePokupki}
            />
            <TextInput 
                value={text}
                onChangeText={changeText}
                placeholder="Add"
                onSubmitEditing={addPokupki}
            />
            <AppStore.Provider
            value = {{
                onCopy : copyToClipboard,
                onPaste: fetchCopiedText
            }}
            >
            <CopyTest/>
            </AppStore.Provider>
            <TouchableOpacity
                onPress = {delPokupkiall}
            >
                <Text>
                    Удалить всё
                </Text>
            </TouchableOpacity>
        </>
    )

}

export default Spisok;