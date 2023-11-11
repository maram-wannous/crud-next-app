/* eslint-disable react/prop-types */
import './classe.css';

export default function ClassBox({icon, title, desc}) {
    return (
        <div className='classe-box'>
            <div className='icon'>
                {icon}
            </div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    );
}