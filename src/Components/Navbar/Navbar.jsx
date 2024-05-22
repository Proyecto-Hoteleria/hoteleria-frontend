import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

export const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          {/* Utiliza Link para navegar a la página Home */}
          <Link to='/' className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon' />Hoteleria.</h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            {/* Utiliza Link para navegar a la página Home */}
            <li className="navItem">
              <Link to='/' className="navLink">Login</Link>
            </li>
            {/* Agrega un Link para navegar a la página de Hotel */}
            <li className="navItem">
              <Link to='/Hotel' className="navLink">Hotel</Link>
            </li>
            {/* Agrega un Link para navegar a la página de Login */}
            <li className="navItem">
              <Link to='/Events' className="navLink">Events</Link>
            </li>
            {/* Otros elementos del menú */}
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;