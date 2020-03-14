import React, {useContext} from 'react';
import {ItemContext} from '../context';
import Title from '../components/title';

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function ItemsFilter({clothes}) {
    const context = useContext(ItemContext);
    const {
        handleChange,
        type,
        size,
        price,
        print,
        color,
        minPrice,
        maxPrice,
    } = context
    //types filter
    let types = getUnique(clothes,'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    //sizes filter
    let sizes = getUnique(clothes,'size');
    sizes = ['all', ...sizes];
    sizes = sizes.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    //colors filter
    let colors = getUnique(clothes,'color');
    colors = ['all', ...colors];
    colors = colors.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    //prints filter
    let prints = getUnique(clothes,'print');
    prints = ['all', ...prints];
    prints = prints.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="fiter-container">
            <Title title="browse wardrobe" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Item type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" 
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <select 
                    name="size" 
                    id="size" 
                    value={size} 
                    className="form-control" 
                    onChange={handleChange}>
                        {sizes}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Color</label>
                    <select 
                    name="color" 
                    id="color" 
                    value={color} 
                    className="form-control" 
                    onChange={handleChange}>
                        {colors}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="prints">Print</label>
                    <select 
                    name="print" 
                    id="print" 
                    value={print} 
                    className="form-control" 
                    onChange={handleChange}>
                        {prints}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price ${price}</label>
                    <input type="range" 
                    name="price" 
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price} 
                    className="form-control" 
                    onChange={handleChange}>
                    </input>
                </div>
            </form>
        </section>
    )
}