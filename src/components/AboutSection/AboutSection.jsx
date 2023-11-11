/* eslint-disable react/prop-types */
import { GiCheckMark } from 'react-icons/gi';
import './aboutSection.css'
import aboutSectionImg from '../../../public/gallery6.jpg'
import Image from 'next/image';

export default function AboutSection({invew}) {


    return (
        <div className="container about-section-content">
            <div className="text" data-aos="fade-right">
            <div className="content">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Natus non cumque magnam pariatur saepe eos.<br/>amet consectetur adipisicing elit.</p>
                <ul>
                    <li><GiCheckMark className='icon'/><span>Behind the word mountains.</span></li>
                    <li><GiCheckMark className='icon'/><span>Far far away mountain.</span></li>
                    <li><GiCheckMark className='icon'/><span>Large language ocean.</span></li>
                </ul>
                    <div className="info">
                        <ul>
                            <li>
                            <p>500</p>
                            <span>No. Student</span>
                            </li>
                            <li>
                            <p>300</p>
                            <span>No. Teachers</span>
                            </li>
                            <li>
                            <p>150</p>
                            <span>No. Awards</span>
                            </li>
                        </ul>
                    </div>
                    <div className="dubble-btn">
                        <button className='btn'>admission</button>
                        <button className='btn active'>learn more</button>
                    </div>
            </div>
            </div>
            
            <div className="image" data-aos="fade-left">
                <Image src={aboutSectionImg} alt="" />
                <div className="shadow-img"></div>
            </div>
            
        </div>
    );
}