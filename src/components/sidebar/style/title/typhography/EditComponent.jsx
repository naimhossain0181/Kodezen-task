import React from 'react';
import { BiDesktop } from 'react-icons/bi'

import './edit.css'
import { useDispatch, useSelector } from 'react-redux';
import {  addSize,addFamily,addWeight,addTransform,addDecoration,addLineHeight,addletterSpacing,addWordSpacing } from '../../../../../store/TyphoSlice';

const EditComponent = () => {
    const dispatch=useDispatch()
    const data= useSelector((store)=>store.Typho.edit)
    return (
        <div className='typho-wraper'>
            <div className='font container'>
                <span>Family</span>
                <select name="familly" id="familly" onChange={(e)=>dispatch(addFamily(e.target.value))}>
                    <option value="Roboto">Roboto</option>
                    <option value="sans-serif">sans-serif</option>
                    <option value="cursive">cursive</option>
                </select>
            </div>
            <div className="size">
                <div className='container'>
                    <div className='size-left'>
                        <span>Size</span>
                        <BiDesktop />
                    </div>
                    <div>
                        <select name="pixelSize" id="pixelSize" placeholder='px' onChange={(e)=>dispatch(addSize(Number(e.target.value)))}>
                            <option  value={24}>px</option>
                            <option value={26}>26</option>
                            <option value={28}>28</option>
                            <option value={32}>32</option>
                        </select>
                    </div>
                </div>
                <div className='container'>
                    <input type="range" value={data.size} min={9} max={72} className='input-range' onChange={(e)=>dispatch(addSize(Number(e.target.value)))} />
                    <input type="text" value={data.size} className='input-px' readOnly  />
                </div>
            </div>
            <div className='weight container'>
                <span>Weight</span>
                <select name="Weight" id="Weight"  onChange={(e)=>dispatch(addWeight(Number(e.target.value)))}>
                    <option value={400}>400 (normal)</option>
                    <option value={600}>600 (bold)</option>
                    <option value={900}>900 (Extra-bold)</option>
                </select>
            </div>
            <div className='transform container'>
                <span>Transform</span>
                <select name="transform" id="transform" onChange={(e)=>dispatch(addTransform(e.target.value))}>
                    <option value="none">default</option>
                    <option value="rotate(2deg)">rotate 2deg</option>
                    <option value="rotate(-2deg)">rotate -2deg</option>
                    <option value="skewY(2deg)">skewY(2deg)</option>
                    <option value="skewY(-2deg)">skewY(-2deg)</option>
                    <option value="scaleX(1.5)">scaleX(1.5)</option>
                    <option value="scaleY(1.5)">scaleY(1.5)</option>
                </select>
            </div>
            <div className='Style container'>
                <span>Style</span>
                <select name="" id="">
                    <option value="none">default</option>
                </select>
            </div>
            <div className='Decoration container'>
                <span>Decoration</span>
                <select name="decoration" id="decoration" onChange={(e)=>dispatch(addDecoration(e.target.value))}>
                    <option value="none">none</option>
                    <option value="overline">overline</option>
                    <option value="underline">underline</option>
                    <option value="line-through">line-through</option>
                    <option value="underline overline">underline overline</option>
                </select>
            </div>

            <div className="line height">
                <div className='container'>
                    <div className='size-left'>
                        <span>Line Height</span>
                        <BiDesktop />
                    </div>
                    <div>
                        <select name="lineHeight" id="lineHeight" placeholder='px' onChange={(e)=>dispatch(addLineHeight(Number(e.target.value)))}>
                            <option value={1.2}>px</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                <div className='container'>
                    <input type="range" value={data.lineHeight} min={1} max={10} className='input-range'onChange={(e)=>dispatch(addLineHeight(Number(e.target.value)))}/>
                    <input type="text" className='input-px' value={data.lineHeight} />
                </div>
            </div>

            <div className="letter-spacing">
                <div className='container'>
                    <div className='size-left'>
                        <span>Letter Spacing</span>
                        <BiDesktop />
                    </div>
                    <div>
                    <select name="letterSpacing" id="letterSpacing" placeholder='px' onChange={(e)=>dispatch(addletterSpacing(Number(e.target.value)))}>
                            <option value={0}>px</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                </div>
                <div className='container'>
                <input type="range" value={data.letterSpacing} min={0} max={50} className='input-range'onChange={(e)=>dispatch(addletterSpacing(Number(e.target.value)))}/>
                    <input type="text" className='input-px' value={data.letterSpacing} />
                </div>
            </div>

            <div className="word-spacing">
                <div className='container'>
                    <div className='size-left'>
                        <span>Word Spacing</span>
                        <BiDesktop />
                    </div>
                    <div>
                    <select name="wordSpacing" id="wordSpacing" placeholder='px' onChange={(e)=>dispatch(addWordSpacing(Number(e.target.value)))}>
                            <option value={0}>px</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                </div>
                <div className='container'>
                <input type="range" value={data.wordSpacing} min={0} max={50} className='input-range'onChange={(e)=>dispatch(addWordSpacing(Number(e.target.value)))}/>
                    <input type="text" className='input-px' value={data.wordSpacing} />
                </div>
            </div>
        </div>
    );
};

export default EditComponent;