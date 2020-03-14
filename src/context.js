import React, { Component } from 'react';
import items from './data';

const ItemContext = React.createContext();

class ItemProvider extends Component {
    state = {
        clothes: [],
        sortedItems: [],
        clothing: [],
        loading: true,
        type: 'all',
        print: 'all',
        color: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
    }
    //getData
    componentDidMount() {
        //this.getData
        let clothes = this.formatData(items);
        let clothing = clothes.filter(cloth => cloth.new === true);
        let  maxPrice = Math.max(...clothes.map(item => item.price));
        let  maxSize = Math.max(...clothes.map(item => item.size));
        this.setState({
            clothes,
            clothing,
            sortedItems: clothes,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })

    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let cloth = { ...item.fields, images, id }
            return cloth;
        })
        return tempItems
    }
    getCloth = (phrase) => {
        let tempClothes = [...this.state.clothes];
        const cloth = tempClothes.find(cloth => cloth.phrase === phrase);
        return cloth;
    }
    handleChange = event => {
        const type = event.target.type
        const name = event.target.name
        const value = event.target.value
    }
    filterItems = () => {

    }
    render() {
        return (
            <ItemContext.Provider value={{ 
                ...this.state, 
                getCloth: this.getCloth,
                handleChange: this.handleChange 
                }}>
                {this.props.children}
            </ItemContext.Provider>
        )
    }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer, ItemContext }