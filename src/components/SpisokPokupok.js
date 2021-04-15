import React from 'react'
import { FlatList } from 'react-native'
import Pokupki from './Pokupki'


const SpisokPokupok = ({ pokupki, delPokupki, completePokupki}) =>
(
    <FlatList
        data={pokupki}
        renderItem={({ item }) => (
            <Pokupki
                name={item.name}
                isComplete={item.isComplete}
                complete={() => completePokupki(item.id)}
                del={() => delPokupki(item.id)}
            />
        )}
        keyExtractor={item => item.id.toString()}
    />
)

export default SpisokPokupok;