import React from 'react';
import {  Text, ScrollView, View } from 'react-native';
import ButtonSwitch from './ButtonSwitch';


class Categories extends React.Component {
    render() {
        const {categories, activeCategory, changeCategory} = this.props;
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category)=>{
                    const status = category.id === activeCategory;
                    return(
                        <ButtonSwitch
                            name={category.name}
                            status={status}
                            toggleSwitch={()=>{changeCategory(status? undefined : category.id)}}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

export default Categories;