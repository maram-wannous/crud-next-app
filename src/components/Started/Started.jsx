import {GiCheckMark} from 'react-icons/gi';
import startedimg from '../../../public/get-started.jpg'
import './started.css'
import Image from 'next/image';

export default function Started() {
    return (
        <div className="container started-content">
            <div className="content" data-aos="fade-right">
                <h2>Become an Instructor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Natus non cumque magnam pariatur saepe eos.<br/>amet consectetur adipisicing elit.</p>
                <ul>
                    <li><GiCheckMark className='icon'/><span>Behind the word mountains.</span></li>
                    <li><GiCheckMark className='icon'/><span>Far far away mountain.</span></li>
                    <li><GiCheckMark className='icon'/><span>Large language ocean.</span></li>
                </ul>
                <button className='btn'>get started</button>
            </div>
            <div className="image" data-aos="fade-left">
                <Image src={startedimg} alt="started" />
            </div>
        </div>
    );
}