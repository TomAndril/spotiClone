import brandImg from "../static/Spotify_Logo_CMYK_White.png";
import { sidenavStyles } from "../styles/Sidenav";
import { connect } from "react-redux";

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
          <p>Playlists</p>
          <ul>
            {!props.playLists
              ? "Cargando..."
              : props.playLists.map((elem, index) => {
                  return <li key={index}>{elem.name}</li>;
                })}
          </ul>
        </div>
      </div>

      <style jsx>{sidenavStyles}</style>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    playLists: state.userPlaylists,
    userData: state.userData
  };
}

export default connect(mapStateToProps)(Sidenav);
