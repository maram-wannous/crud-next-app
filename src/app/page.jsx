import Image from 'next/image'
import './home.css'
import Hero from '@/components/Hero/Hero';
import heroHomeImg from '../../public/home-hero.jpg';
import Gategory from '@/components/Gategory/Gategory';
import Started from '@/components/Started/Started';
import Classe from '@/components/Classe/Classe';
import quotimg from '../../public/home-hero.jpg'
import AboutSection from '@/components/AboutSection/AboutSection';
import PricingBox from '@/components/PricingBox/PricingBox';
import testimg1 from '../../public/pic-1.png'
import testimg2 from '../../public/pic-2.png'
import testimg3 from '../../public/pic-3.png'
import testimg4 from '../../public/pic-4.png'
import testimg5 from '../../public/pic-5.png'
import testimg6 from '../../public/pic-6.png'
import ChooseUs from '@/components/ChooseUs/ChooseUs';



export default function Home() {

     // hero info
     const homeImg = heroHomeImg;
     const homeTitle= 'Education is the Mother of Leadership';
     const homeSubTitle = 'whatch the video';
     const homeButton= 'explore courses';

    // pricing info array
    const pricingInfo= [
      {
          title: 'Starter',
          price: '$50.99',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
          state: false,
      },
      {
          title: 'Business',
          price: '$99.99',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
          state: true,
      },
      {
          title: 'Premium',
          price: '$199.99',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium Maxime numquam aliquid culpa eos.',
          state: false,
      },
  ];
   // testimonials info
   const testimonials = [
    {
      name: 'John Doe',
      work: 'CEO, Founder',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: testimg1,
    },
    {
      name: 'Jane Doe',
      work: 'student',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: testimg2,
    },
    {
      name: 'Bob Smith',
      work: 'someone',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: testimg3,
    },
    {
        name: 'Bob Smith',
        work: 'someone',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: testimg4,
      },
      {
        name: 'Bob Smith',
        work: 'someone',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: testimg5,
      },
      {
        name: 'Bob Smith',
        work: 'someone',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: testimg6,
      },
  ];
  return (
    <div>
      {/* hero section */}
      <Hero heroPic={homeImg} title={homeTitle} subTitle={homeSubTitle} button={homeButton}  />

       {/* gategory section */}
       <div className="gategory-section">
              <div className="main-title">
                  <h1>Brouse Top Category</h1>
              </div>
              <Gategory/>
              <p>we have more category here. <span>Brouse all</span></p>
        </div>

        {/* started section */}
        <div className="started-section section-padding">
            <Started/>
        </div>

        {/* clasess section */}
        <div className="clasess-section section-padding">
            <div className="main-title">
                <h1>We Have Best Education</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
            </div>
            <Classe/>
        </div>

        {/* quote section */}
        <div className="quote-section">
            <Hero heroPic={quotimg}
                title='Education For Tomorrow Leader'
                secTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius vel cupiditate nesciunt porro suscipit nihil nulla labore quaerat quos.'
                button='enroll now'
            />
        </div>

        {/* about section */}
        <div className="about-section section-padding">
            <AboutSection />
        </div>



         {/* pricing section */}
        <div className="pricing-section section-padding">
            <div className="main-title">
                <h1>Pricing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, vero sunt.<br/>Perferendis eius perspiciatis nostrum!</p>
            </div>
            <div className="container pricing-content">
                {
                    pricingInfo.map((i, index)=>
                    <div key={index} data-aos="fade-up" data-aos-dela={100*index}>
                    <PricingBox title={i.title} 
                                price={i.price} 
                                desc={i.desc} 
                                state={i.state} />
                    </div>
                    )
                }
            </div>
        </div>

        {/* choos us section */}
        <div className="choose-section section-padding">
                <ChooseUs/>
            </div>

    </div>
      )
}
