import BoxGategory from './BoxGategory';
import './gategory.css';
import { GiMaterialsScience } from 'react-icons/gi';
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {CiCalculator1} from 'react-icons/ci'
import {MdOutlineDesignServices} from 'react-icons/md'
import {CiMusicNote1} from 'react-icons/ci'
import {TbSocial} from 'react-icons/tb'
import {MdOutlinePhotoCamera} from 'react-icons/md'
import {MdAnimation} from 'react-icons/md'

export default function Gategory () {

    const gategoryInfo = [
        {fierstInfo: 'Science', secInfo: '1,134 courses', icon: <GiMaterialsScience/>},
        {fierstInfo: 'Business', secInfo: '1,134 courses', icon: <MdOutlineBusinessCenter/>},
        {fierstInfo: 'Fainance Accouting', secInfo: '1,134 courses', icon: <CiCalculator1/>},
        {fierstInfo: 'Design', secInfo: '1,134 courses', icon: <MdOutlineDesignServices/>},
        {fierstInfo: 'Music', secInfo: '1,134 courses', icon: <CiMusicNote1/>},
        {fierstInfo: 'Markiting', secInfo: '1,134 courses', icon: <TbSocial/>},
        {fierstInfo: 'Photography', secInfo: '1,134 courses', icon: <MdOutlinePhotoCamera/>},
        {fierstInfo: 'Animation', secInfo: '1,134 courses', icon: <MdAnimation/>},
    ]


    return(
        <div className='container gategory-content'>
            {
                gategoryInfo.map((item, index)=>
                    <div key={index} data-aos="zoom-in" data-aos-delay={100*index} >
                    <BoxGategory  
                                firstInfo={item.fierstInfo} 
                                secInfo={item.secInfo} 
                                icon={item.icon} 
                                
                                />
                    </div>
                )
            }
        </div>
    );
}