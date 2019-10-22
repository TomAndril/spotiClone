import React from "react";
import brandImg from "../static/Spotify_Logo_CMYK_White.png";

class Sidenav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidenav">
          <div className="logo-container">
            <img src={brandImg} />
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <i className="fas fa-home fa-lg"></i>
                <span>Inicio</span>
              </li>
              <li>
                <i className="fas fa-search fa-lg"></i>
                <span>Buscar</span>
              </li>
              <li>
                <i className="fas fa-book-open fa-lg"></i>
                <span>Tu Biblioteca</span>
              </li>
            </ul>
          </div>
          <div className="playlists">
            <span>Playlists</span>
            <ul>{this.props.playlists}</ul>
          </div>
        </div>

        <style jsx>{`
          .sidenav {
            width: 230px;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            background: linear-gradient(to right, #000000, #434343);
            overflow-x: hidden;
            color: lightgrey;
            display: flex;
            flex-direction: column;
          }

          .logo-container img {
            width: 60%;
            padding: 25px 0px 0px 25px;
          }

          .nav-links ul li {
            margin-top: 25px;
            list-style-type: none;
            color: #b3b3b3;
          }

          .nav-links ul li:hover {
            color: #fff;
            transition: 0.5s;
            cursor: pointer;
          }

          .nav-links ul li span {
            font-weight: 900;
            font-size: 0.8em;
            padding-left: 22px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Sidenav;
