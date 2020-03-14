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
        size: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    }
    //getData
    componentDidMount() {
        //this.getData
        let clothes = this.formatData(items);
        let clothing = clothes.filter(cloth => cloth.new === true);
        let  maxPrice = Math.max(...clothes.map(item => item.price));
        this.setState({
            clothes,
            clothing,
            sortedItems: clothes,
            loading: false,
            price: maxPrice,
            maxPrice,
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
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterItems)
    }
    filterItems = () => {
        let {
            clothes,
            type,
            print,
            color,
            price,
            size,
        } = this.state

        let tempClothes = [...clothes];
        //filter by type
        if(type!=='all'){
            tempClothes = tempClothes.filter(cloth => cloth.type === type)
        }
        //filter by size
        if(size!=='all'){
            tempClothes = tempClothes.filter(cloth => cloth.size === size)
        }
        //filter by color
        if(color!=='all'){
            tempClothes = tempClothes.filter(cloth => cloth.color === color)
        }
        //filter by print
        if(print!=='all'){
            tempClothes = tempClothes.filter(cloth => cloth.print === print)
        }
        //filter by price
        tempClothes = tempClothes.filter(cloth => cloth.price <= price);
        //change state
        this.setState({
            sortedItems: tempClothes
        })
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