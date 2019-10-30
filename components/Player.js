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
          <div>
            {props.currentlyPlaying === ""
              ? ""
              : props.currentlyPlaying.item.name}
          </div>
          <div>
            {props.currentlyPlaying === ""
              ? "No estas reproduciendo nada"
              : props.currentlyPlaying.item.artists[0].name}
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
