import React from 'react'
import './footer.css'
import video2 from '../../assets/Footer.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'


export const Footer = () => {
  return (
      <section className='footer'>
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
        </div>

       <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>MANTENTE ENTERADO AQUÍ</small>
            <h2>Travel with us</h2>
          </div>

           <div className="inputDiv flex">
           <input type='text' placeholder='Enter Email Address'/>
           <button className='btn flex' type='submit'>
              ENVIAR <FiSend className='icon'/>
           </button>
           </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>travel
              </a>
            </div>

            <div className="footerParagraph">
            Viajar con nosotros es mucho más que hospedarse; es sumergirse en una experiencia hotelera única donde cada detalle está diseñado para brindarte confort y 
            felicidad en cada momento de tu estancia.
            </div>
            <div className="footerSocials flex"></div>
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className="icon" />

          </div>
          {/*FILA 2*/}
          
          <div className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle">
                NUESTRO SERVICIO
                </span>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Evento
                 </li>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Hotel
                 </li>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Habitación
                 </li>

                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Usuario
                 </li>

                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Reserva
                 </li>
              </div>


          </div>
            

          <div className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle">
                MÁS SOLICITADOS
                </span>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Londres
                 </li>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    California
                 </li>
                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Guatemala
                 </li>

                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    Europa
                 </li>

                 <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                    America
                 </li>
              </div>


          </div>
        </div>
       </div>



      </section>
  )
}

export default Footer
