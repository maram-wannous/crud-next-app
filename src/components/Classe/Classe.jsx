import ClassBox from './ClassBox';
import './classe.css'
import {CiMusicNote1} from 'react-icons/ci'
import {AiOutlineCalculator} from 'react-icons/ai'
import {LiaBookSolid} from 'react-icons/lia'
import {BiBookReader} from 'react-icons/bi'
import {GoHistory} from 'react-icons/go'
import {SlEarphones} from 'react-icons/sl'

export default function Classe() {

    const classeInfo= [
        {
            title: 'Music Class',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <CiMusicNote1/>,
        },
        {
            title: 'Math Class',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <AiOutlineCalculator/>,
        },
        {
            title: 'English Class',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <LiaBookSolid/>,
        },
        {
            title: 'Reading for Kids',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <BiBookReader/>,
        },
        {
            title: 'History Classe',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <GoHistory/>,
        },
        {
            title: 'Music',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium expedita doloribus dolores accusantium minima magnam eaque!',
            icon: <SlEarphones/>,
        },
    ]
    return (
        <div className='container classe-content'>
             {
                classeInfo.map((item, index)=>
                    <div key={index} data-aos="zoom-in-up" data-aos-delay={100*index}>
                    <ClassBox  icon={item.icon} title={item.title} desc={item.desc} />
                    </div>
                )
            }
        </div>
    );
}