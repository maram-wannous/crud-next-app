/* eslint-disable react/prop-types */
import './gategory.css';


export default function BoxGategory ({firstInfo, secInfo, icon}) {
    return(
        <div className='gategory-box'>
            <div className='icon'>
                {icon}
            </div>
            
            <div className="info">
                <p>{firstInfo}</p>
                <span>{secInfo}</span>
            </div>
        </div>
    );
}