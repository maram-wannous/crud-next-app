"use client"
import CardBox from '@/components/cardbox/CardBox'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getById } from '@/store/actions/coursers.action';
import './course.css'

export default function Course({params}) {

    const dispatch = useDispatch();
    const course = useSelector((state) => state.courses.courseById);


  useEffect(() => {
      dispatch(getById(params.id)); 
  }, []);

    return(
        <div className='container cardbox-course-details'>
            <CardBox
                    cardimg={course.cardImg} 
                    lessonNum={course.lessonNumber} 
                    rate={course.rating} 
                    title={course.titleLess} 
                    desc={course.describtion} 
                    price={course.priceLess}
                    id={course.id}
                    // button={course.button}
                    startAt={course.start_at}
                    endAt={course.end}
                    authorName={course.author_name}
                    edite='Edite'
                    // data-aos="fade-up"
            /> 
        </div>
    )
}