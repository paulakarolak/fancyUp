import React from 'react';
import ItemsFilter from './itemsFilter';
import ItemsList from './itemsList';
import { ItemConsumer } from '../context';
import Loading from './loading';

export default function WardrobeContainer() {
    return (
        <ItemConsumer>
            {value => {
                const {
                    loading,
                    sortedItems,
                    clothes
                } = value
                if (loading) {
                    return <Loading />
                }
                return (
                    <>
                        <ItemsFilter clothes={clothes} />
                        <ItemsList clothes={sortedItems} />
                    </>
                )
            }}
        </ItemConsumer>
    )
}