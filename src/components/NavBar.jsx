import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false); 
  const [button, setButton] = useState(true);

  const handledClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PET SHELTER <i className="fab fa-typo3" />
          </Link>
          <div className='menu-icon' onClick={handledClick}>
            <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
          </div>
          < ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/pets' className='nav-links' onClick={closeMobileMenu}>
                pets
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' >Sign Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default NavBar
