import Head from "next/head";

function Header(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://kit.fontawesome.com/4ea5e712e0.js"
        crossorigin="anonymous"
      ></script>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
      />
    </Head>
  );
}

export default Header;
