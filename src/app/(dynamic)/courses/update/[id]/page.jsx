"use client"
import { useEffect, useState } from 'react';
import './update.css'
import { useDispatch, useSelector } from 'react-redux';
import { editCourse, getById } from '@/store/actions/coursers.action';
import { useRouter } from 'next/navigation';

export default function Update({params}) {

    const [titleLess, setTitleLess] = useState("");
    const [describtion, setDescribtion] = useState("");
    const [start_at, setStart_at] = useState("");
    const [end_at, setEnd_at] = useState("");
    const [author_name, setAuthor_name] = useState("");
    const [priceLess, setPriceLess] = useState("");
    const [lessonNumber, setLessonNumber] = useState("");
    const [cardImg, setCardImg] = useState("");
    const [rating] = useState("4.8");
    const [button] = useState("Learn more");

    const router = useRouter("");
    const dispatch = useDispatch("");
    const course = useSelector((state) => state.courses.courseById);
    
    const handleUploadImage = (file) => {
        const url = URL.createObjectURL(file);
        setCardImg(url);
    };

     useEffect(() => {
    if (router?.query?.id && !course?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setTitleLess(res.payload?.titleLess);
        setDescribtion(res.payload?.describtion);
        setStart_at(res.payload?.start_at);
        setEnd_at(res.payload?.end_at);
        setAuthor_name(res.payload?.author_name);
      });
    } else {
        setTitleLess(course?.titleLess);
        setDescribtion(course?.describtion);
        setStart_at(course?.start_at);
        setEnd_at(course?.end_at);
        setAuthor_name(course?.author_name);
    }
  }, [router]);


    const handleSubmit = () => {
        dispatch(
        editCourse({
            id: router?.query?.id,
            titleLess,
            describtion,
            start_at,
            end_at,
            author_name,
            cardImg,
        })
        ).then(res => {
            router.push('/courses')
        });
    };

    return(
        <div className="container section-padding add-form">
            <div className="main-title">
                <h1>Update Course Page</h1>
            </div>
            <div className="input-form">
                <label>Title</label>
                <input type="text" value={titleLess} onChange={(e) => setTitleLess(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Description</label>
                <input type="text" value={describtion} onChange={(e) => setDescribtion(e.target.value)} />
            </div>
            {/* <div className="input-form">
                <label>Price</label>
                <input type="text" value={priceLess} onChange={(e) => setPriceLess(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Lessone number</label>
                <input type="text" value={lessonNumber} onChange={(e) => setLessonNumber(e.target.value)} />
            </div> */}
            <div className="input-form">
                <label>Image</label>
                <input type="file" onChange={(e) => handleUploadImage(e.target.files[0])} />
            </div>
            <div className="input-form">
                <label>Author</label>
                <input type="text" value={author_name} onChange={(e) => setAuthor_name(e.target.value)}  />
            </div>
            <div className="input-form">
                <label>Start at</label>
                <input type="date" value={start_at} onChange={(e) => setStart_at(e.target.value)}  />
            </div>
            <div className="input-form">
                <label>End at</label>
                <input type="date" value={end_at} onChange={(e) => setEnd_at(e.target.value)}  />
            </div>
            <button 
                className='btn'
                type="submit"
                onClick={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>Submit</button>
    </div>
    )
}