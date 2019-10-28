import React from "react";
import Link from "next/link";
import Head from "../components/Head";
import brandLogo from "../static/Spotify_Logo_CMYK_White.png";
import { indexStyle } from "../styles/index";

///////////////////////////////////////////
// SPOTIFY DEVELOPER IDS y SCOPES DE API //
//////////////////////////////////////////

const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "5cb3e81c8a0f4a9689e3ff720eefdbf0";
const redirectUri = "http://localhost:3000/main";
const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-read",
  "playlist-read-private",
  "user-top-read"
];

function index(props) {
  return (
    <React.Fragment>
      {props.children}
      <Head title="MusikIT Login" />
      <div className="main-login">
        <div className="brand-logo-container">
          <img src={brandLogo} />
        </div>
        <div className="login-area-container">
          <h2>Para continuar, logeate con tu cuenta de Spotify</h2>
          <div className="login-button">
            <Link
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=false`}
            >
              <a>Login</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>
        {indexStyle}
      </style>
    </React.Fragment>
  );
}

export default index;
