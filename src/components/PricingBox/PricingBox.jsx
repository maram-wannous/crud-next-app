/* eslint-disable react/prop-types */
import './pricingbox.css'

export default function PricingBox({title, price, desc, state}) {

    return (
        <div className='price-box'>
            <h3 className='title'>{title}</h3>
            <h3 className='price'>{price}<span>/month</span></h3>
            <p>{desc}</p>
            <button className={state? 'btn' : 'btn active'}>get started</button>
        </div>
        
    );
}