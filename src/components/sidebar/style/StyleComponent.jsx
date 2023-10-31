import React, { useState } from 'react';
import './style.css'
import { BiSolidRightArrow, BiSolidDownArrow } from 'react-icons/bi'
import TitleComponent from './title/TitleComponent';
const StyleComponent = () => {
    const [isTitle, setIsTitle] = useState(false)
    return (
        <div className='warper'>
            <div className='title-main' onClick={() => setIsTitle(!isTitle)}>
                <div className='title'>
                    {isTitle ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                    <strong>Title</strong>
                </div>
                <div onClick={(e)=>e.stopPropagation()}>
                    {isTitle? <TitleComponent/>:""}
            </div>
            </div>
        </div>
    );
};

export default StyleComponent;