import { useSelector, useDispatch} from 'react-redux';
import { fetchWeather } from '../../feature/wdata';
import { useEffect } from 'react';
// import { store } from '../../store';

export default function Render() {
  const {data} = useSelector((store) => store.wwdata);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchWeather());
  }, [dispatch])
  console.log(data);
  return (
    <div>
      <h1>Weather</h1>
     <div className="main__container">
      {/* {data.map((item) => {
       
        <div>
          <h1>{item}</h1>
        </div>
       
      })} */}
     </div>
    </div>
  );
}

