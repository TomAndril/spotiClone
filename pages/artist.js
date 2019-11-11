import React from "react";
import axios from "axios";
import Head from "../components/Head";
import { connect } from "react-redux";
import Link from "next/link";
import Album from "../components/Album";

class artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
      albums: []
    };
  }

  static async getInitialProps({ reduxStore, req, query }) {
    const id = req ? req.params.id : query.id;
    return {
      queryId: id
    };
  }

  async componentDidMount() {
    const artistRequest = await axios.get(
      "https://api.spotify.com/v1/artists/" + this.props.queryId,
      {
        headers: {
          Authorization: "Bearer " + this.props.token
        }
      }
    );

    const albumRequest = await axios.get(
      "https://api.spotify.com/v1/artists/" + this.props.queryId + "/albums",
      {
        headers: {
          Authorization: "Bearer " + this.props.token
        }
      }
    );
    this.setState({
      artist: artistRequest.data,
      albums: albumRequest.data
    });
  }

  render() {
    return (
      <React.Fragment>
        <Head
          title={!this.props.token ? "Cargando..." : this.state.artist.name}
        />

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
            <div className="artist-container">
              <div className="artist-data">
                <div className="goback-link">
                  <Link href="/main">
                    <a> ← Volver</a>
                  </Link>
                </div>
                {!this.state.artist.images ? (
                  <h3>Cargando...</h3>
                ) : (
                  <div className="artist">
                    <img src={this.state.artist.images[1].url} />
                    <h3>Albums de {this.state.artist.name}</h3>
                  </div>
                )}
              </div>

              <div className="albums">
                {!this.state.albums.items ? (
                  <h3>Cargando...</h3>
                ) : (
                  this.state.albums.items.map((elem, index) => {
                    return (
                      <Album
                        image={elem.images[1].url}
                        name={elem.name}
                        key={index}
                      />
                    );
                  })
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

          .error-container {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .artist-container {
            height: 100%;
            display: grid;
            grid-template-columns: 200px 200px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: "a a c c c c c c c c c c";
          }

          .artist-data {
            grid-area: a;
            position: fixed;
            left: 30px;
          }

          .artist {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .artist h3 {
            color: #fff;
            font-size: 1.4em;
            letter-spacing: 2px;
          }

          .artist img {
            max-width: 320px; max-height: 320px;
          }

          .goback-link {
            padding: 15px 0px 15px 0px;
          }

          .goback-link a {
            text-decoration: none;
            color: lightgrey;
            font-weight: 600;
          }

          .albums {
            grid-area: c;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 50px 20px 50px 0px;
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

export default connect(mapStateToProps)(artist);
