import React, { useState } from 'react';
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
          <a href='#' className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon' />Hoteleria.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Eventos</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Hotel</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Habitación</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Usuarios</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Reservas</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Factura</a>
            </li>
            <button className='btn'>
              <a href='#'>¿Buscas Algo?</a>
            </button>
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
