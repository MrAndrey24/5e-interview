import React from 'react'
import '../Styles/Header.css'
import logo from '../assets/logo.svg'
import userIcon from '../assets/icon.svg'

export default function Header() {
  return (
    <header>
    <nav>
       <div className='logo-container'>
       <div className="logo">
            <img src={logo} alt="" />
        </div>
       </div>
        <div className="user-info">
            <div className="email">
                <p>hello@cataglog.ac</p>
            </div>
            <div className="user-icon">
                <img src={userIcon} alt="" />
            </div>
        </div>
    </nav>
</header>
  );
}
