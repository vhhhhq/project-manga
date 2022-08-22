import React from 'react';
import './Header.css';
import Search from '../../assets/Search.svg';
import Checkbox from '../../components/Checkbox/Checkbox';
import Sign from '../../pages/Sign/Sign';



function Header() {
  return (
    <header className='header'>
        <div className="header-container">
            <div className="header-nav">
                <a href="">Home</a>
                <a href="">Directory</a>
                <a href="">Novell</a>
            </div>
            <div className="navigation">
                <div className="btn-search">
                    <button>
                        <img src={Search} alt="search" />
                    </button>
                    <input type="search" placeholder='What are you looking for Sempai?'/>  
                </div>
                <div className="btn-mode">
                    <Checkbox/>
                </div>
                <div className="header-sign">
                    <Sign/>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;