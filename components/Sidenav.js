import brandImg from "../static/Spotify_Logo_CMYK_White.png";
import { sidenavStyles } from "../styles/Sidenav";
import nullImg from "../static/null-logo.png";
import { connect } from "react-redux";
import { IoIosAlbums, IoIosSearch, IoMdHome } from "react-icons/io";

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
              <IoMdHome />
              <span>Inicio</span>
            </li>
            <li>
              <IoIosSearch />
              <span>Buscar</span>
            </li>
            <li>
              <IoIosAlbums />
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
        <div className="user-data">
          <img
            src={
              !props.userData.images ? nullImg : props.userData.images[0].url
            }
          />
          <span>{props.userData.display_name}</span>
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
