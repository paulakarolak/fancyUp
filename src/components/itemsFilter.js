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
        price,
        print,
        color,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
    } = context
    let types = getUnique(clothes,'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
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
            </form>
        </section>
    )
}