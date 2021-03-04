import React from 'react';
import { ScrollView } from 'react-native';
import CategoryListItem from './CategoryListItem';

class Categories extends React.Component {


    render(){

        const { categories, activeCategory, changeCategory} = this.props;

        return (
            <ScrollView horizontal>
                {categories.map((category)=>{

                    const isActive = category.id === activeCategory;

                    return (
                        <CategoryListItem 
                            name={category.name}
                            isActive={isActive}
                            onPress={()=>{changeCategory(isActive? undefined : category.id)}}
                        />
                    )
                     
                })}
            </ScrollView>
        )
    }
}

export default Categories;