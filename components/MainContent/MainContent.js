import { mainContentStyles } from "../../styles/MainContent";
import Header from "./Header";
import FeaturedPlaylist from "./FeaturedPlaylists/FeaturedPlaylist";
import TopArtistsPlaylists from "./TopArtistsPlaylists/TopArtistsPlaylists";

class MainContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-content-container">
          <Header />
          <TopArtistsPlaylists />
          <FeaturedPlaylist />
        </div>

        <style jsx>{mainContentStyles}</style>
      </React.Fragment>
    );
  }
}

export default MainContent;
