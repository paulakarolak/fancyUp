import React, { Component } from 'react';
import { ItemContext } from '../context';
import Loading from './loading';
import Item from './item';
import Title from './title';

export default class Cloth extends Component {
    static contextType = ItemContext
    render() {
        let { loading, clothing: clothes } = this.context;
        clothes = clothes.map(cloth => {
            return <Item key={cloth.id} cloth={cloth} />
        })
        return (
            <section className="new-clothes">
                <Title title="New arrivals" />
                <div className="new-clothes-center">
                    {loading ? <Loading /> : clothes}
                </div>
            </section>
        )
    }
}
