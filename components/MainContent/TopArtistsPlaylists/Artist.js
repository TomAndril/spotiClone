import { artistStyles } from "../../../styles/Artist";

function Artist(props) {
  return (
    <React.Fragment>
      <div className="artist-container">
        <div>
          <img src={props.image} />
        </div>
        <div>
          <span>{props.artistName}</span>
        </div>
      </div>

      <style jsx>{artistStyles}</style>
    </React.Fragment>
  );
}

export default Artist;
