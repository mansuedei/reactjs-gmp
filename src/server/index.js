// Startup point for the server side application
import "core-js/stable";
import "@babel/polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "../Routes";
import renderer from "../helpers/renderer";
import createStore from "../helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
    return route.loadData ? route.loadData(store, match) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
