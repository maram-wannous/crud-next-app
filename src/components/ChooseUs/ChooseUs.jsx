import './chooseus.css'
import chooseimg1 from '../../../public/gallery2.jpg'
import Accordion from '../Accordion/Accordion';
import Image from 'next/image';
export default function ChooseUs() {
    return(
        <div className='container choose-content'>
            <div className="image" data-aos="fade-right">
                <Image src={chooseimg1} alt="" />
            </div>
            <div className="text">
                <div className="content">
                    <h3 data-aos="fade-left">Why Choose Us</h3>
                    <p data-aos="fade-left" data-aos-delay='100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae placeat, aperiam aspernatur qui ab sapiente.</p>
                    <Accordion/>
                </div>
            </div>
        </div>
    );
}