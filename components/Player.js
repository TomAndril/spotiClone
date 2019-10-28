import { playerStyles } from "../styles/Player";

function Player(props) {
  return (
    <React.Fragment>
      <div className="player">
        <div className="artist-data">
          <img src={props.albumImg} />
        </div>
        <div>{props.isPlaying}</div>
      </div>

      <style jsx>{playerStyles}</style>
    </React.Fragment>
  );
}

export default Player;
