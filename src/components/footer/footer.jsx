import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
import gallery1 from '../../../public/gallery1.jpg'
import gallery2 from '../../../public/gallery2.jpg'
import gallery3 from '../../../public/gallery3.jpg'
import gallery4 from '../../../public/gallery4.jpg'
import gallery5 from '../../../public/gallery5.jpg'
import gallery6 from '../../../public/gallery6.jpg'
import Link from 'next/link';
import './footer.css'
import Image from 'next/image';

export default function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="box">
                    <h3>About us</h3>
                    <p className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                    </p>
                    <h3>Connect</h3>
                    <div className="social">
                        <Link href={'#'}><FaFacebookF/></Link>
                        <Link href={'#'}><FaInstagram/></Link>
                        <Link href={'#'}><FaTwitter/></Link>
                        <Link href={'#'}><FaLinkedinIn/></Link>
                        <Link href={'#'}><SlSocialPintarest/></Link>
                        <Link href={'#'}><FaGoogle/></Link>
                    </div>
                </div>
                <div className="box">
                    <h3>Projects</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Gallery</h3>
                    <div className='footer-gallery'>
                        <Image width={78} src={gallery1} alt='footer' />
                        <Image width={78} src={gallery2} alt='footer' />
                        <Image width={78} src={gallery3} alt='footer' />
                        <Image width={78} src={gallery4} alt='footer' />
                        <Image width={78} src={gallery5} alt='footer' />
                        <Image width={78} src={gallery6} alt='footer' />
                    </div>
                </div>
                <div className="box ">
                    <h3>Contact</h3>
                    <ul className='info'>
                        <li>43 Raymouth Rd. Baltemoer, london 3910</li>
                        <li>+1(123)-456-7890</li>
                        <li>+1(123)-456-7890</li>
                        <li>info@mydomain.com</li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright &copy; 2023. -Designed With Love By <span>Maram</span></p>
        </div>
    );
}