import { playerStyles } from "../styles/Player";
import nullImage from "../static/null-logo.png";
import { connect } from "react-redux";

function Player(props) {
  return (
    <React.Fragment>
      <div className="player">
        <div className="artist-data">
          <img
            src={
              !props.currentlyPlaying
                ? nullImage
                : props.currentlyPlaying.item.album.images[1].url
            }
          />
        </div>
        <div>
          <div className="currently-playing-container">
            <div>
              {props.currentlyPlaying === "" ? (
                ""
              ) : (
                <span className='song'>{props.currentlyPlaying.item.name}</span>
              )}
            </div>
            <div>
              {props.currentlyPlaying === "" ? (
                "No estas reproduciendo nada"
              ) : (
                <span className='artist'>{props.currentlyPlaying.item.artists[0].name}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{playerStyles}</style>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  console.log(state.currentlyPlaying);
  return {
    currentlyPlaying: state.currentlyPlaying
  };
}

export default connect(mapStateToProps)(Player);
