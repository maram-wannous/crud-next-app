"use client"
import './courses.css'
import { FadeLoader } from 'react-spinners'
import CardBox from '@/components/cardbox/CardBox'
import { useDispatch, useSelector } from 'react-redux';
import { get } from '@/store/actions/coursers.action';
import { useEffect } from 'react'
import Link from 'next/link'


export default function Courses() {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.data);
    const loading = useSelector((state) => state.courses.isLoading);
    const auth = useSelector((state) => state.auth.isAuth);

    
    useEffect(() => {
        dispatch(get());
      }, []);

    return(
        <div className='secondery-pages coursesPage'>
            <div className='coursesPage-content'>
                <div className="coursesPage-title main-title">
                    <h1>Courses to get you started</h1>
                </div>
                <div className='container add-btn'>
                    {auth? (<Link href={'/courses/add'}><button className='btn'>Add New Course</button></Link>)
                    :
                    (<p className='note'>If you want to Add, Update, delete..you have to login...</p>)
                    }
                    
                </div>

                {loading ? 
                    <div className='container spinner'>
                        <FadeLoader color="#136ad5" />
                    </div>
                    
                    :
                    
                    <div className='container cardbox-courses'>
                        {
                        courses?.map((item,index)=> (
                            <CardBox key={index} 
                            cardimg={item.cardImg} 
                            lessonNum={item.lessonNumber} 
                            rate={item.rating} 
                            title={item.titleLess} 
                            desc={item.describtion} 
                            price={item.priceLess}
                            id={item.id}
                            button={item.button}
                            // data-aos="fade-up"
                            /> 

                        )) }
                    </div>
                }
                
            </div> 
        </div>
    )
}