import css from "styled-jsx/css";

export const indexStyle = css`
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
`;
