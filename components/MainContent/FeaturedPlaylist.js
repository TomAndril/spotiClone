import { FeaturedPlaylistStyles } from "../../styles/FeaturedPlaylist";
import Featured from "./Featured";
import nullImage from "../../static/null-logo.png";
import { connect } from "react-redux";

function FeaturedPlaylist(props) {
  return (
    <React.Fragment>
      <div className="featured-playlists-container">
        <div className="playlist-name">
          {!props.featuredPlaylists ? (
            "Cargando..."
          ) : (
            <span>{props.featuredPlaylists.message}</span>
          )}
        </div>

        <div className="playlist-carousel">
          {!props.featuredPlaylists.playlists ? (
            <Featured image={nullImage} />
          ) : (
            props.featuredPlaylists.playlists.items
              .slice(0, 6)
              .map((elem, index) => {
                return (
                  <Featured
                    key={index}
                    image={elem.images[0].url}
                    playlistName={elem.name}
                  />
                );
              })
          )}
        </div>
      </div>

      <style jsx>{FeaturedPlaylistStyles}</style>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  console.log(state.featuredPlaylists);
  return {
    featuredPlaylists: state.featuredPlaylists
  };
}

export default connect(mapStateToProps)(FeaturedPlaylist);
