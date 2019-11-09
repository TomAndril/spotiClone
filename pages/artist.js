import React from "react";
import axios from "axios";
import Head from "../components/Head";
import { connect } from "react-redux";
import Link from "next/link";

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
        <div className="artist-container">
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
            <div>Hola</div>
          )}
        </div>

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
