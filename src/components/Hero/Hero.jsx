/* eslint-disable react/prop-types */

import Image from 'next/image';
import './hero.css'



export default function Hero({heroPic , title , secTitle , button, subTitle}){



    return (
      <div className="hero">
        <Image src={heroPic} alt="" loading='lazy'/>
        <div className="overlay"></div>     
        <div className="container info">
          <span data-aos="fade-up">{subTitle}</span>
          <h1 data-aos="fade-up" data-aos-delay='100'>{title}</h1>
          <h2 data-aos="fade-up" data-aos-delay='200'>{secTitle}</h2>
          <button className="hero-btn">{button}</button>
         
        </div>
    </div>
    );
}