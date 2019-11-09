const express = require("express");
const next = require("next");

const compression = require("compression");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const withImages = require("next-images");
module.exports = withImages({});

app.prepare().then(() => {
  const server = express();

  server.use(compression());
  server.use(express.static(__dirname + "/static", { maxAge: 86400000 }));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

  server.get("/playlist/:id", (req, res) => {
    return app.render(req, res, "/playlist", req.params);
  });

  server.get("/artist/:id", (req, res) => {
    return app.render(req, res, "/artist", req.params);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
