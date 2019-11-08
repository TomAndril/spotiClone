import { featuredStyles } from "../../../styles/Featured";
import MainContent from "../MainContent";
import Link from "next/link";

class Featured extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="featured-container">
          <Link
            href={`/playlist?id=${this.props.url}`}
            as={`/playlist/${this.props.url}`}
          >
            <a>
              <div>
                <img src={this.props.image} />
              </div>
              <div>
                <span>{this.props.playlistName}</span>
              </div>
            </a>
          </Link>
        </div>

        <style jsx>{featuredStyles}</style>
      </React.Fragment>
    );
  }
}

export default Featured;
