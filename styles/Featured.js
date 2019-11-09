import css from 'styled-jsx/css';

export const featuredStyles = css`
  .featured-container {
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

  .featured-container div img {
    width: 100%;
  }

  .featured-container div span {
    color: #b3b3b3;
    font-size: 0.8em;
    font-weight: 600;
  }

  .featured-container a {
    text-decoration: none;
  }
`