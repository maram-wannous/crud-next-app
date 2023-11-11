"use client"
import { useState } from 'react';
import './accordion.css';
import accordionimg1 from '../../../public/gallery3.jpg';
import accordionimg2 from '../../../public/gallery4.jpg';
import accordionimg3 from '../../../public/gallery6.jpg';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai'
import Image from 'next/image';


export default function Accordion () {

        const [activeIndex, setActiveIndex] = useState(0);
        const [p1, setP1] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, suscipit laudantium. Porro illum odit iste.");
        const [p2, setP2] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nisi.");
        const [image, setImage] = useState(accordionimg1);
      
        const items = [
          {
            title: "Good Teachers and Staffe",
            p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, suscipit laudantium. Porro illum odit iste.",
            p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nisi.",
            img: accordionimg1,
          },
          {
            title: "We Value Good Characters",
            p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, suscipit laudantium. Porro illum odit iste.",
            p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nisi.",
            img: accordionimg2,
          },
          {
            title: "Your Children are Safe",
            p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, suscipit laudantium. Porro illum odit iste.",
            p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nisi.",
            img: accordionimg3,
          },
        ];
      
        const handleClick = (index) => {
          setActiveIndex(index);
          setP1(items[index].p1);
          setP2(items[index].p2);
          setImage(items[index].img);
        };
    return(
        
    <div className="accordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index} data-aos="fade-left" data-aos-delay={(index+2)*100}>

            <div
              className={activeIndex === index ? "active accordion-title" : "accordion-title"}
              onClick={() => handleClick(index)}>
              {activeIndex === index ? 
              (<AiOutlineMinus/>)
              :
              (<AiOutlinePlus/>)
              }
              <p>{item.title}</p>              
            </div>

            {activeIndex === index && (
            <div className="accordion-content sec-div">
              <Image height={185} src={image} alt="" />
                  <div className='text-div'>
                    <p>{p1}</p>
                    <p>{p2}</p>
                  </div>
            </div>
            )}
          </div>
        ))}
    </div>
    );
}