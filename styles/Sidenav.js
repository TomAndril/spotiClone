import css from "styled-jsx/css";

export const sidenavStyles = css`
  .sidenav {
    width: 230px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(to right, #000000, #434343);
    overflow-x: hidden;
    color: lightgrey;
    display: flex;
    flex-direction: column;
  }

  .logo-container img {
    width: 60%;
    padding: 25px 0px 0px 25px;
  }

  .nav-links ul li {
    margin-top: 25px;
    list-style-type: none;
    color: #b3b3b3;
  }

  .nav-links ul li:hover {
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  .nav-links ul li span {
    font-weight: 900;
    font-size: 0.8em;
    padding-left: 22px;
  }

  .user-container {
    margin-top: 190px;
  }

  .playlists p {
    padding-left: 15px;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 800;
  }

  .playlists ul li {
    list-style-type: none;
    padding: 10px 0px 10px 0px;
    font-size: 0.7em;
    letter-spacing: 2px;
    font-weight: 800;
  }

  .user-data {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px 5px 10px;
    position: absolute;
    bottom: 110px;
  } 

  .user-data img {
    width: 15%;
    border-radius: 25px;
  }

  .user-data span {
    padding-left: 10px;
    color: #b3b3b3;
    font-weight: 900;
    font-size: 0.7em;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
