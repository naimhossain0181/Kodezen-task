import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDragIndicator, MdSettings, MdEdit } from 'react-icons/md'
import { VscColorMode } from 'react-icons/vsc'
import StyleComponent from  './sidebar/style/StyleComponent';

const Sidebar = ({ sideWidth, }) => {
  const [active, setActive] = useState('style')

  return (
    <div className="side-menu" style={{ width: `${sideWidth ? '0px' : '220px'}` }}>
      <div className='side-menu-nav'>
        <GiHamburgerMenu />
        <strong>Edit Heading</strong>
        <MdDragIndicator />
      </div>
      <div className='side-menu-body'>
        <div className='side-menu-second-nav'>
          <button className={`${active === 'content' ? 'styled-button' : ''}`} onClick={() => setActive('content')}>
            <MdEdit style={{ fontSize: '20px' }} />
            <p>Content</p>
          </button>
          <button className={`${active === 'style' ? 'styled-button' : ''}`} onClick={() => setActive('style')}>
            <VscColorMode style={{ fontSize: '16px' }} />
            <p>Style</p>
          </button>
          <button className={`${active === 'advanced' ? 'styled-button' : ''}`} onClick={() => setActive('advanced')}>
            <MdSettings style={{ fontSize: '18px' }} />
            <p>Advanced</p>
          </button>
        </div>
        <div className='side-menu-outlet'>
          {
            active==='style'? <StyleComponent/> :""
          }
        </div>
      </div>

    </div>
  );
};

export default Sidebar;