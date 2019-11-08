import Head from "next/head";
import favicon from '../static/Spotify_icon-icons.com_66783.ico';

function Header(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
      <link rel='icon' href={favicon} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
      />
    </Head>
  );
}

export default Header;
