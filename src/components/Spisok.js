import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'
import SpisokPokupok from './SpisokPokupok'

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
        </>
    )

}

export default Spisok;