import React from "react";
import "./main.css";

//import icons 
import {HiOutlineLocationMarker } from 'react-icons/hi';
import {LuClipboardCheck} from 'react-icons/lu';
//let me import images so we dont have this error on the browser
import img from '../../assets/Hotelcity-mexico.jpg'//Pendiente imagen
import img2 from '../../assets/Guatemalazona14city.jpg'
import img3 from '../../assets/Austi-Hotel.jpg'
import img4 from '../../assets/GuatemalaCity.jpg'
import img5 from '../../assets/Guanajuato.jpg'
import img6 from '../../assets/CinqueTerre.jpg'
import img7 from '../../assets/HOTELES.jpg'
import img8 from '../../assets/Taj-Mahal-India.jpg'
//Let me paste the arry named data
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "Ciudad de Mexico",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious statys and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Panajachel",
    location: "Guatemala Department, Guatemala",
    grade: 'CULTURAL RELAX',
    fees: '$6000',
    description:'El Volcán San Pedro es una montaña en Guatemala que se eleva sobre Panajachel, un pintoresco pueblo a orillas del lago Atitlán. Este lugar es popular entre los turistas ya que el amanecer desde Indian Nose es simplemente espectacular.'

  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: 'CULTURAL RELAX',
    fees: '$7000',
    description:'Mount Warning es una montaña en Australia, que se eleva sobre la Gran Barrera de Coral, el sistema de arrecifes de coral más grande del mundo. Este lugar es popular entre los turistas, ya que el amanecer desde la cumbre es simplemente espectacular.' 
  },{
    id: 4,
    imgSrc: img4,
    destTitle: "Flores",
    location: "Peten Department, Guatemala",
    grade: 'CULTURAL RELAX',
    fees: '$8000',
    description:'El Cerro Cahuí es una montaña en Guatemala, que se eleva sobre Flores, en el departamento de Petén. Este lugar es popular entre los turistas, ya que el amanecer desde la cima es simplemente espectacular.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "GuanaJuato",
    location: "Mexico",
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'La Bufa es una montaña en México, que se eleva sobre Guanajuato, una histórica ciudad colonial. Este lugar es popular entre los turistas, ya que el amanecer desde la cima es simplemente espectacular.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'Monte Malpertuso es una montaña en Italia, que se eleva sobre Cinque Terre, una encantadora región costera. Este lugar es popular entre los turistas, ya que el amanecer desde la cima es una experiencia inolvidable.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "La Alhambra",
    location: "Granada - España",
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description:'Ubicada en la encantadora ciudad de Granada, Andalucía, la Alhambra es una joya arquitectónica que combina la belleza del arte islámico con paisajes naturales impresionantes. Este palacio y fortaleza te transportará a la época de los reyes nazaríes, ofreciéndote una experiencia inolvidable llena de historia y cultura.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:'El Cerro Agra es una colina en India, que se eleva sobre el Taj Mahal, el icónico mausoleo. Este lugar es popular entre los turistas, ya que el amanecer desde la cima es una experiencia única.'
  }
];

export const Main = () => {
  return (
    <section className="main container section">
      <div className="sectTitle">
        <center>
        <h3 className="title">Destinos más visitados</h3>
        </center>
      </div>

      <div className="secContent grid">
        {/*se guy, here we are g*/}

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>     

                <div className="cardInfo">
                 <h4 className="destTitle">{destTitle}</h4>
                 <span className="continent flex">
                    <HiOutlineLocationMarker  className='icon'/>
                    <span className="name">{location}</span>
                 </span>

                 <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                 </div>

                 <div className="desc">
                    <p>{description}</p>
                 </div>
                 <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon"/>
                 </button>
                </div> 
              </div>
            )
          }
        )}
      </div>
    </section>
  );
};

export default Main