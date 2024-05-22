import React from "react";
import "./home.css";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Navbar from "../Navbar/Navbar"; // Ajusta la ruta según sea necesario
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar /> {/* Inserta el Navbar aquí */}
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent contal">
          <div className="textDiv">
            <span className="smallText">
              Viaja con nosotros: Tu experiencia hotelera elevada a otro nivel
            </span>
            <h1 className="homeTitle">Busca Tu Hotel</h1>
          </div>
          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Busca tu destino:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here....." />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Selecciona la fecha</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Precio Maximo:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>MORE FILTERS</span>
            </div>
          </div>
          <div className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
      <Main />
    </>
  );
};

export default Home;