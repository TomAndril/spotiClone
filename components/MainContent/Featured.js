import { featuredStyles } from "../../styles/Featured";

function Featured(props) {
  return (
    <React.Fragment>
      <div className="featured-container">
        <div>
          <img src={props.image} />
        </div>
        <div>
          <span>{props.playlistName}</span>
        </div>
      </div>

      <style jsx>{featuredStyles}</style>
    </React.Fragment>
  );
}

export default Featured;
