import { useSelector } from "react-redux"


export default function Navbar() {
    const {amount , total, cart} = useSelector((state) => state.cart)
  return (
    <div>
        <ul>
            <li>Home</li>
            <li>{cart}</li>
            <li>{total}</li>
            <li>{amount}</li>
        </ul>
    </div>
  )
}
