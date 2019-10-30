import React from "react";
import HeadTag from "../components/Head";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import Player from "../components/Player";
import { connect } from "react-redux";
import {
  setToken,
  setUserData,
  setCurrentlyPlaying,
  setUserPlaylists
} from "../store";

class Main extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;

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

    /////////////////////////
    // DISPATCH DE ACTIONS //
    /////////////////////////

    dispatch(setToken(hash.access_token));
    dispatch(setUserData(nameRequest.data));
    dispatch(setUserPlaylists(userPlaylistsRequest.data.items));
    dispatch(setCurrentlyPlaying(currentlyPlayingRequest.data));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <HeadTag title="MusikIT Main" />
          <Sidenav />
          <Player />
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

export default connect()(Main);