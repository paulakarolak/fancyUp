import React from 'react';
import Item from './item';

export default function ItemsList({clothes}) {
    if(clothes.length === 0) {
        return (
            <div className="empty-search">
                <h3>No clothes match your search parameters.</h3>
            </div>
        )
    }
    return (
       <section className="itemslist">
           <div className="itemslist-center">
               {
                   clothes.map(item => {
                       return <Item key={item.id} cloth={item}/>
                   })
               }
           </div>
       </section>
    )
}