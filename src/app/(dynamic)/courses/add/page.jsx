"use client"
import { useDispatch } from 'react-redux';
import './addcourse.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addNewCourse } from '@/store/actions/coursers.action';

export default function Add() {

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
    const dispatch = useDispatch("");
    const router = useRouter("");


    const handleUploadImage = (file) => {
        const url = URL.createObjectURL(file);
        setCardImg(url);
    };
    const handleSubmit = () => {
        dispatch(
          addNewCourse({
            titleLess,
            describtion,
            start_at,
            end_at,
            author_name,
            priceLess,
            lessonNumber,
            cardImg,
            rating,
            button
          })
        ).then(res => {
                router.push('/courses')
        });
      };

    return(
        <div className="container section-padding add-form">
            <div className="main-title">
                <h1>Add New Course Page</h1>
            </div>
            <div className="input-form">
                <label>Title</label>
                <input type="text" onChange={(e) => setTitleLess(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Description</label>
                <input type="text" onChange={(e) => setDescribtion(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Price</label>
                <input type="text" onChange={(e) => setPriceLess(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Lessone number</label>
                <input type="text" onChange={(e) => setLessonNumber(e.target.value)} />
            </div>
            <div className="input-form">
                <label>Image</label>
                <input type="file" onChange={(e) => handleUploadImage(e.target.files[0])} />
            </div>
            <div className="input-form">
                <label>Author</label>
                <input type="text" onChange={(e) => setAuthor_name(e.target.value)}  />
            </div>
            <div className="input-form">
                <label>Start at</label>
                <input type="date" onChange={(e) => setStart_at(e.target.value)}  />
            </div>
            <div className="input-form">
                <label>End at</label>
                <input type="date" onChange={(e) => setEnd_at(e.target.value)}  />
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