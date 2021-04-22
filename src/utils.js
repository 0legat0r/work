import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export function createProduct(name) {
    return {
        id: uuidv4(),
        name,
        isSelected: false
    }
}