import React from "react";
import axios from "axios";
import Head from "../components/Head";
import { connect } from "react-redux";
import Link from "next/link";

class playlist extends React.Component {
  constructor(props) {
    super();
    this.state = {
      playlist: []
    };
  }

  static async getInitialProps({ reduxStore, req, query }) {
    const id = req ? req.params.id : query.id;
    return {
      queryId: id
    };
  }

  async componentDidMount() {
    const playlistRequest = await axios.get(
      "https://api.spotify.com/v1/playlists/" + this.props.queryId,
      {
        headers: {
          Authorization: "Bearer " + this.props.token
        }
      }
    );
    this.setState({
      playlist: playlistRequest.data
    });
    console.log(playlistRequest.data);
  }

  render() {
    return (
      <React.Fragment>
        <Head title={!this.state.playlist.name ? 'Cargando...' : this.state.playlist.name} />

        {!this.props.token ? (
          <React.Fragment>
            <div className="error-container">
              <h3>
                Para ver este contenido, por favor logeate desde la pagina
                principal
              </h3>
              <Link href="/">
                <a>Ir a la Pagina Principal</a>
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="playlist-container">
              <div className="album-data">
                <div className="goback-link">
                  <Link href="/main">
                    <a> ← Volver</a>
                  </Link>
                </div>
                {!this.state.playlist.images ? (
                  <h3>Cargando...</h3>
                ) : (
                  <div className="album">
                    <img src={this.state.playlist.images[0].url} />
                    <h3>{this.state.playlist.name}</h3>
                    <h5>{this.state.playlist.tracks.total} Canciones</h5>
                  </div>
                )}
              </div>
              <div className="album-songs">
                {!this.state.playlist.tracks ? (
                  <h3>Cargando...</h3>
                ) : (
                  <div>
                    <ul>
                      {this.state.playlist.tracks.items.map((elem, index) => {
                        return(
                          <li>
                            {elem.track.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        )}

        <style jsx global>{`
          html,
          body {
            font-family: "Montserrat", sans-serif;
            margin: 0;
            height: 100%;
            background-color: #232526;
          }

          li {
            list-style-type: none;
            padding: 5px 0px 5px 0px;
          }

          .playlist-container {
            height: 100%;
            display: grid;
            grid-template-columns: 200px 200px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: "a a c c c c c c c c c c";
          }

          .album-data {
            grid-area: a;
            position: fixed;
            left: 30px;
          }

          .album {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .album h3 {
            color: #fff;
            letter-spacing: 1px;
            font-size: 1.7em;
          }

          .album h5 {
            color: #b3b3b3;
          }

          .album-songs {
            grid-area: c;
          }

          .error-container {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .goback-link {
            padding: 15px 0px 15px 0px;
          }

          .goback-link a {
            text-decoration: none;
            color: lightgrey;
            font-weight: 600;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps)(playlist);
