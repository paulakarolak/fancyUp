import React from 'react';

export default function Title({children, title}) {
    return (
        <section className="section-title">
            <h4>{title}</h4>
           <div></div>
           {children}
        </section>
    )
}
