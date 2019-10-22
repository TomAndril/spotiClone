import React from "react";

class Player extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="player">
          <div className="artist-data">
            <img src={this.props.albumImg} />
          </div>
          <div>{this.props.isPlaying}</div>
        </div>

        <style jsx>{`
          .player {
            position: fixed;
            bottom: 0;
            left: 0;
            height: 100px;
            width: 100%;
            background: linear-gradient(to right, #232526, #414345);
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .artist-data img {
            padding: 10px 15px 10px 15px;
            width: 80px;
            height: 80px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Player;
