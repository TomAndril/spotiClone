import { artistStyles } from "../../../styles/Artist";
import Link from "next/link";

function Artist(props) {
  return (
    <React.Fragment>
      <div className="artist-container">
        <Link
          href={`/artist?id=${props.url}`}
          as={`/artist/${props.url}`}
        >
          <a>
            <div>
              <img src={props.image} />
            </div>
            <div>
              <span>{props.artistName}</span>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{artistStyles}</style>
    </React.Fragment>
  );
}

export default Artist;
