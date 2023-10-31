import React, { useState } from 'react';
import './title.css'
import { BiSolidCheckbox } from 'react-icons/bi'
import { TbWorldLatitude } from 'react-icons/tb'
import { AiFillEdit } from 'react-icons/ai'
import { IoReload } from 'react-icons/io5'
import { GrAdd } from 'react-icons/gr'
import EditComponent from './typhography/EditComponent';
import { useDispatch } from 'react-redux';
import { reload } from '../../../../store/TyphoSlice';
const TitleComponent = () => {
    const [isTyphoEdit, setIsTyphoEdit] = useState(false)
    const dispatch=useDispatch()
    return (
        <div className='title-container'>
            <div className='title-contain'>
                <span>text color</span>
                <div className='icon-area'>
                    <button>
                        <TbWorldLatitude color='purple' fontSize={16} />
                    </button>
                    <button>
                        <BiSolidCheckbox color='blue' fontSize={16} />
                    </button>
                </div>
            </div>

            <div className='typho title-contain'>
                <span>Typhography</span>
                <div className='icon-area '>
                    <button>
                        <TbWorldLatitude fontSize={16} />
                    </button>
                    <button onClick={() => setIsTyphoEdit(!isTyphoEdit)}>
                        <AiFillEdit fontSize={16} />
                    </button>
                </div>
                {
                    isTyphoEdit?          <div className='typho-action'>
                    <div className="typho-nav">
                        <strong>Typhography</strong>
                        <div className='btn-area'>
                            <button onClick={()=>dispatch(reload())}><IoReload /></button>
                            <button><GrAdd /></button>
                        </div>
                    </div>
                    <EditComponent />
                </div>:""
                }
      
            </div>
        </div>
    );
};

export default TitleComponent;