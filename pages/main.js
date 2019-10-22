import React from "react";
import HeadTag from "../components/Head";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import Player from "../components/Player";
import nullLogo from "../static/null-logo.png";

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      userName: null,
      currentlyPlaying: "",
      userPlaylists: []
    };
  }

  async componentDidMount() {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    ///////////////////////////
    // FETCHS DE LOS SCOPES //
    //////////////////////////

    const nameRequest = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + hash.access_token
      }
    });

    const userPlaylistsRequest = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: "Bearer " + hash.access_token
        }
      }
    );

    const currentlyPlayingRequest = await axios.get(
      "https://api.spotify.com/v1/me/player",
      {
        headers: {
          Authorization: "Bearer " + hash.access_token
        }
      }
    );

    /////////////////////////////

    this.setState({
      token: hash.access_token,
      userName: nameRequest.data.display_name,
      currentlyPlaying: currentlyPlayingRequest.data,
      userPlaylists: userPlaylistsRequest.data.items
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <HeadTag />
          <Sidenav
            playlists={
              !this.state.userPlaylists
                ? "Cargando..."
                : this.state.userPlaylists.map((elem, index) => {
                    return <li key={index}>{elem.name}</li>;
                  })
            }
          />
          <Player
            isPlaying={
              this.state.currentlyPlaying === ""
                ? "No se esta reproduciendo nada"
                : this.state.currentlyPlaying.item.artists[0].name
            }
            albumImg={
              this.state.currentlyPlaying === ""
                ? nullLogo
                : this.state.currentlyPlaying.item.album.images[1].url
            }
          />
        </div>

        <style jsx global>{`
          body {
            font-family: "Montserrat", sans-serif;
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default main;
