import React from "react";
import { Link ,NavLink} from "react-router-dom";
function Navbar() {
  const style = 
            {
              backgroundcolor : "blue",
             position: 'absolute',
             width: '100%' 
            };
  return (   
    <div className='navbar-sticky'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink to="/home" className="nav-link">
    Dashboard <span className="sr-only">(current)</span>
    </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Login <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Register <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </div> 
  );
}

export default Navbar;
