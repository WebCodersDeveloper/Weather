import { useDispatch, useSelector } from "react-redux"
import { store } from "../../store"
import { useEffect } from "react";
import { getData } from "../../feature/weatherSlice";


// eslint-disable-next-line react/prop-types
export default function Render() {
  const Data = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData());
    console.log(Data,'store');
  },[])
  return (
    <>
    <div className="box">
        <h1>heloo</h1>
    </div>
    </>
  )
}
