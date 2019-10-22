import React from "react";
import Link from "next/link";
import Head from "../components/Head";
import brandLogo from "../static/Spotify_Logo_CMYK_White.png";

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

/////////////////////////////////////////////

class index extends React.Component {
  render() {
    return (
      <React.Fragment>
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

        <style jsx global>{`
          body {
            font-family: "Montserrat", sans-serif;
            background: linear-gradient(to top, #232526, #414345);
            overflow: hidden;
          }

          .brand-logo-container {
            padding: 25px 0px 0px 25px;
          }

          .brand-logo-container img {
            max-width: 175px;
          }

          .main-login {
            height: 100vh;
            width: 100vw;
          }

          .login-area-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 20vh;
          }

          .login-area-container h2 {
            color: #b3b3b3;
            letter-spacing: 2px;
            font-size: 2em;
          }

          .login-button a {
            text-decoration: none;
            font-size: 1.2em;
            color: black;
            font-weight: 400;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: bold;
            padding: 15px 50px 15px 50px;
            background: #52c234;
            border-radius: 5px;
            transition: box-shadow 0.4s ease 0s;
          }

          .login-button a:hover {
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default index;
