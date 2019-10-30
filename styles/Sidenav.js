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
  }

  .playlists ul li {
    list-style-type: none;
    padding: 5px 0px 5px 0px;
  }
`;
