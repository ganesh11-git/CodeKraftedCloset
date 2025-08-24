import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style ={{textDecoration:'none'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
            
            <li onClick={()=>{setMenu("hidden-gems")}}><Link style ={{textDecoration:'none'}} to='/hidden-gems'>Hidden Gems</Link>{menu==="hidden-gems"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("thrift")}}><Link style ={{textDecoration:'none'}} to='/thrift'>Thrift</Link>{menu==="thrift"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("rents")}}><Link style ={{textDecoration:'none'}} to= '/rents'>Rent-IT</Link>{menu==="rents"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("accessories")}}><Link style ={{textDecoration:'none'}} to= '/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>

            <li className='special' onClick={()=>{setMenu("trial-trunk")}}><Link style ={{textDecoration:'none',color:'transparent',background:'linear-gradient(90deg,#1559d6, rgb(216, 49, 231) 60%)',backgroundClip:'text',fontSize:'21px',fontWeight:'700'}} to= '/trial-trunk'>"Trial-Trunk"</Link>{menu==="trial-trunk"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LOGOUT</button>
        :<Link to='/login'><button>LOGIN</button></Link>}

            <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
export default Navbar;