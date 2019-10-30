import css from "styled-jsx/css";

export const playerStyles = css`
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
`;
  