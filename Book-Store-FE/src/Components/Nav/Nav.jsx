import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Images from '../../Constants/Images.js';




const Nav = () => {
  const { user } = useSelector(state => state.user);

  const navigate = useNavigate();

  const logout = () =>{
    sessionStorage.clear();
    navigate("/admin");
    location.reload()
  }



  return (
    <>
      <div id="nav">

        <div className="navbar navbar-dark bg-dark d-sm-none row ">

          <div className="col-6">
            <img src={images.Huddle} alt="Logo" className="img-fluid" />
          </div>

          <div className="col-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>


        <nav className="navbar navbar-expand-sm bg-dark " id="navbarToggleExternalContent">
          <div className="col-4  text-light d-none d-sm-flex" >
            <img src={images.Huddle} alt="Logo" className="img-fluid" />
          </div>
          <div className="container-fluid text-center col-12  col-sm-4 collapse justify-content-center" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white " to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/login">Contact</Link>
              </li>

            </ul>
          </div>
          
          {
            <div className="container-fluid text-white col-12 col-sm-4 text-white justify-content-end px-5">
              <ul className="navbar-nav">
                {!user ?
                    (<li className="nav-item ">
                      <Link className="nav-link text-white " to="/login">Admin</Link>
                    </li>)
                    :
                    (<>
                      <li className="nav-item ">
                        <Link className="nav-link text-white " to="/admin"><i className="fa fa-user"></i> {user.user.email} </Link>
                      </li>
                      <li>
                        <button className="btn btn-outline-danger btn-lg" onClick={logout}>LogOut</button>
                      </li>
                     </>
                    )
                }
              </ul>
            </div>

          }
           
        </nav>








      </div>
    </>
  )
}

export default Nav;