import { mainContentStyles } from "../../styles/MainContent";
import Header from './Header';
import FeaturedPlaylist from './FeaturedPlaylist'

function MainContent() {
  return (
    <React.Fragment>
      <div className='main-content-container'>
        <Header />
        <FeaturedPlaylist />
      </div>

      <style jsx>{mainContentStyles}</style>
    </React.Fragment>
  );
}

export default MainContent;
