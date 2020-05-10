import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../img/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        {/* <Logo className='logo' /> */}
      </Link>
      <div className='options'>
        <Link className='option' to='/home'>
          Home
        </Link>
        <Link className='option' to='/home'>
          Product
        </Link>
        <Link className='option' to='/home'>
          Solutions
        </Link>
        <Link className='option' to='/home'>
          Contact-us
        </Link>
      </div>
    </div>
  );
};

export default Header;
