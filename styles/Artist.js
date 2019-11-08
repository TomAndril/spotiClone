import css from "styled-jsx/css";

export const artistStyles = css`
  .artist-container {
    width: 175px;
    height: 175px;
    min-width: 175px;
    min-height: 175px;
    padding: 0px 15px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .artist-container div img {
    width: 100%;
  }

  .artist-container div span {
    color: #b3b3b3;
    font-size: 0.8em;
    font-weight: 600;
  }
`;
