import React, { useEffect } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';

const Outlet = ({ sideWidth, setSideWidth }) => {
    const data = useSelector((store) => store.Typho.edit)
    return (
        <div className="outlet" style={{ width: `calc(100% - ${sideWidth ? '0px' : '220px'})` }}>
            <button className='side-menu-hide-btn' onClick={() => setSideWidth(!sideWidth)}>{sideWidth ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}</button>
            <div className='output'>
                <h1 style={{
                    fontSize: data.size, fontFamily:data.family, fontWeight: data.weight, transform: data.transform, textDecoration: data.decoration, lineHeight: data.lineHeight,
                    letterSpacing: data.letterSpacing, wordSpacing: data.wordSpacing
                }}>Kodezen IT</h1>
                <p>naim1997dec1@gmail.com
                </p>
            </div>
        </div>
    );
};

export default Outlet;