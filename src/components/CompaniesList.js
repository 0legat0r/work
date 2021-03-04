import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Categories from './Categories';
import CompanyListItem from './CompanyListItem';

class CompaniesList extends React.Component {

    renderItem = ({ item, index }) => {
        return (
            <CompanyListItem {...item} />
        )
    }

    render(){

        const { data, activeCategory, changeCategory } = this.props;

        const category = data.find((category)=>category.id === activeCategory );

        const companies = data.reduce((prev, category)=>{
            category.companies.forEach((company)=>{
                if (!prev.find((item)=>item.id === company.id )) {
                    prev.push(company)
                } 
            })
            return prev;
        }, [])

        return (
            <FlatList
                data={category? category.companies : companies}
                renderItem={this.renderItem}
                keyExtractor={(company)=>String(company.id)}
                ListHeaderComponent={<Categories 
                    categories={data} 
                    activeCategory={activeCategory} 
                    changeCategory={changeCategory} 
                />}
                ListEmptyComponent={<View style={{ height: 300, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Ничего не найдено :(</Text>
                </View>}
            />
        )
    }
}

export default CompaniesList;