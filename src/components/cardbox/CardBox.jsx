"use client"
import './cardbox.css'
import {BiBookReader} from 'react-icons/bi'
import {AiTwotoneStar} from 'react-icons/ai'
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '@/store/actions/coursers.action';
import { useRouter } from 'next/navigation';

export default function CardBox({cardimg, lessonNum, rate, title, desc, price, id, button, startAt, endAt, authorName, edite}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteCourse(id))
        .then(res => {
            router.push('/courses')
        })
        ;
    }
    return(
        <div className='card-box' data-aos="zoom-in-up">
            <div className="image">
                <Image width={300} height={250} src={cardimg} alt="" />
            </div>
            <div className="content">
                <div className="first-title">
                    <div className="left-icon">
                        <BiBookReader/>
                        <span>{lessonNum}</span>
                    </div>
                    <div className="right-icon">
                        <AiTwotoneStar/>
                        <span>{rate}</span>
                    </div>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
                <div className="course-details">
                    <span>{startAt}</span>
                    <span>{endAt}</span>
                    <span>{authorName}</span>
                </div>
                <div className="line"></div>
                <div className="info">
                    <span>{price}</span>
                    <Link href={`/courses/${id}`}>{button}</Link>
                </div>
            </div>
            <div className={edite?'edite-btn':'edite-btn not-active'}>
                <div className="link1"><Link href={`/courses/update/${id}`}>{edite}</Link></div>
                <div className="link2"><Link href={'#'} onClick={()=> handleDelete(id)}>Delete</Link></div>              
            </div>

        </div>
    );
}