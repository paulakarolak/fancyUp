import React, {useContext} from 'react';
import {ItemContext} from '../context';
import Title from '../components/title';

export default function ItemsFilter() {
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
                        <option value="single">dress</option>
                    </select>
                </div>

            </form>
        </section>
    )
}