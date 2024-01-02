  import { useSelector, useDispatch } from "react-redux";
  import { extraReducers, fetchWeather } from "../../feature/wdata";
  import { useEffect, useState } from "react";
  import { CiCloud } from "react-icons/ci";
  import { FaSearch, FaRegEye, } from "react-icons/fa";
  import { IoManOutline } from "react-icons/io5";
  import { FaDroplet, } from "react-icons/fa6";
  import './render.scss'
  import 'leaflet/dist/leaflet.css';


  export default function Render() {
    const { data } = useSelector((store) => store.wwdata);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const text = data?.current && data.current.condition.text;
    const [show, setShow] = useState(true);



    const bgChange = () => {
      if(text === "Mist"){
        document.body.style.backgroundImage = `url(https://wallpapercave.com/wp/wp4155376.jpg)`
      }
      else if(text === "Partly cloudy"){
        document.body.style.backgroundImage = `url(https://e0.pxfuel.com/wallpapers/356/659/desktop-wallpaper-partly-cloudy-partly-cloudy.jpg)`
      } 
      else if(text === "Sunny"){
        document.body.style.backgroundImage = `url(https://i.pinimg.com/originals/f6/32/b0/f632b07f8ab9b2a0ccf77998c766064b.gif)`
      }
      else if(text === "Cloudy"){
        document.body.style.backgroundImage = `url(https://images.pexels.com/photos/414491/pexels-photo-414491.jpeg?cs=srgb&dl=pexels-pixabay-414491.jpg&fm=jpg)`
      }
      else if(text === "Light rain"){
        document.body.style.backgroundImage = `url(https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_512.gif)`
      }
      else if(text === "Overcast"){
        document.body.style.backgroundImage = `url(https://images.wallpaperscraft.com/image/single/mountains_clouds_cloudy_119193_3840x2160.jpg)`
      }
      else if(text === "Light snow"){
        document.body.style.backgroundImage = `url(https://wallpapercave.com/wp/wp2125008.jpg)`
      }
      else if(text === "Blizzard"){
        document.body.style.backgroundImage = `url(https://www.icegif.com/wp-content/uploads/2023/02/icegif-1087.gif)`
      }
      else if(text === "Fog"){
        document.body.style.backgroundImage = `url(https://c4.wallpaperflare.com/wallpaper/341/560/836/cities-chicago-building-city-wallpaper-preview.jpg)`
      }
      else{
        document.body.style.backgroundImage = `url(https://i.makeagif.com/media/11-17-2015/Fz90sX.gif)`
      }
    };

    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(fetchWeather(name));
      setName("")
      console.log(extraReducers);
      setShow(false);
    }
    useEffect(() => {
      bgChange();
    }, [bgChange()]);
    // console.log(temp);
    return (
      <>
        <div className="logo_search">
          <h1>
            Weather <CiCloud />
          </h1>
          <form onSubmit={handleSearch}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search..." />
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
                <h4>{data.location.localtime}</h4>
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
                  <div className="wind_center">
                    <span style={{transform: `rotate(${data.current.wind_degree}deg)`}}><i className="fa-solid fa-arrow-up"></i></span>
                    <h3>{data.current.wind_kph} km/h</h3>
                  </div>
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
        </div>
        {show && (
        <div className="adj">
          <h1>Welome Weather<CiCloud /></h1>
          <h1> Search with your country name...</h1>  
        </div>
    )}
        <footer>
          <h2>- Created by Akhmadjanov -</h2>
        </footer>
      </>
    );
  }
