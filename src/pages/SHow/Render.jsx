import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../../feature/wdata";
import { useEffect, useState } from "react";
import { CiCloud } from "react-icons/ci";
import { FaSearch, FaRegEye } from "react-icons/fa";
import { IoManOutline } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import './render.scss'
import 'leaflet/dist/leaflet.css';

export default function Render() {
  const { data } = useSelector((store) => store.wwdata);
  const dispatch = useDispatch();

  const text = data?.current && data.current.condition.text;
  const temp = data?.forecast && data.forecast.forecastday[0].hour;
  
const mapping = () => {
  temp.map((item)=>{
    console.log(item.temp_c)
  })
}

  const bgChange = () => {
    if(text === "Mist"){
      document.body.style.backgroundImage = `url(https://i.pinimg.com/originals/72/60/18/72601872bb3dcfc122f2cdb7cb9d8855.gif)`
      // console.log(true)
    } else if(text === "sunny"){
      document.body.style.backgroundImage = `url(https://i.makeagif.com/media/11-17-2015/Fz90sX.gif)`
    }

  };
  useEffect(() => {
    dispatch(fetchWeather());
    bgChange();
    mapping();
  }, [dispatch,bgChange(),mapping()]);
  // console.log(temp);
  return (
    <div>
      <div className="logo_search">
        <h1>
          Weather <CiCloud />
        </h1>
        <form>
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="main__container">
        {data?.current && (
          <div className="center__container">
            <div className="info_region">
              <h2>{data.location.name}</h2>
              <h3>- {data.location.country} -</h3>
            </div>
            <div className="info_tempr">
              <h3>{data.current.temp_c} ℃</h3>

              <h3>
                {data.current.condition.text}
                <img src={data.current.condition.icon} alt="" />
              </h3>
            </div>
            <div className="info_wh">
              <div className="wind">
                <img src="../../../public/compas.png" alt="" />
                <img src="../../../public/compas_icon.png" className="compas_IC" style={{transform: `rotate(${data.current.wind_degree}deg)`}} alt="" />
                <h3>{data.current.wind_kph} km/h</h3>
              </div>
              <div className="humaditiy">
                <div className="line"></div>
                <div className="line2"></div>
                <div className="hd">
                  <FaDroplet className="icon"/>
                  <h3>{data.current.humidity}%</h3>
                </div>
                <div className="hd">
                  <FaRegEye className="icon" />
                  <h3>{data.current.vis_km} km</h3>
                </div>
                <div className="hd">
                  <IoManOutline  className="icon" />
                  <h3>{data.current.feelslike_c}°</h3>
                </div>
                <div className="xd">
                  <h3 className="icon">Pressure</h3>
                  <h3>{data.current.pressure_mb} mb</h3>
                </div>
              </div>
            </div>
          </div>
        )}
        <div id="map">
        {/* <iframe src="https://maps.google.com/maps?q='+{}+','+YOUR_LON+'&hl=es&z=14&amp;output=embed"></iframe> */}
        </div>
      </div>
    </div>
  );
}
