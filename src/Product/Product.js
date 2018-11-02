import React from 'react'


export default function Product(props) {
    let {image, name, price } = props
    return (
        <div>
            <p>{ image }</p>
            <p>{ name }</p>
            <p>{ price }</p>
            Product
        </div>
    )
}