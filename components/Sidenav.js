import brandImg from "../static/Spotify_Logo_CMYK_White.png";
import { sidenavStyles } from "../styles/Sidenav";

function Sidenav(props) {
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
          <ul>{props.playlists}</ul>
        </div>
      </div>

      <style jsx>{sidenavStyles}</style>
    </React.Fragment>
  );
}

export default Sidenav;
