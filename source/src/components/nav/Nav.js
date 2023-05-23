import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const auth = localStorage.getItem('user');
  console.log(auth);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div className="nav false">

      <a href="/">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="netflix logo"
      />
      </a>
      <a href="/login">
      <img
        className="nav__avatar"
        src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
        alt=""
      />
      </a>
            <div  className='nav__signup' >
            {auth ?  <Link onClick={logout} to="/signup" >Logout</Link>
         :
         <Link to="/signup">Sign Up</Link>}
         </div>
            {/* <div className='nav__logout'><Link to="/login">Login</Link></div> */}
                  
    </div>
  );
}

export default Nav;