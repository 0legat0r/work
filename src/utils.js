import uuid from 'react-native-uuid'

// const product = {
//   id: 'number',
//   name: 'string',
//   isSelected: 'boolean',
// }

export function createProduct(name) {
    return {
        id: uuid.v4(),
        name,
        isSelected: false
    }
}