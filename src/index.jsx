import * as $ from "jquery";
import Post from "./Post.js";
import "./styles/styles.css";
import xml from "./examples/data.xml";
import json from "./examples/json";
import Logo from "./examples/png-image.png";
import "./styles/less.less";
import "./styles/sass.scss";
import "./babel";
import React from "react";
import { render } from "react-dom";

const post = new Post("Webpack Post Title", Logo);
console.log(post.toString());
console.log("JSON", json);
console.log("XML", xml);

// $("pre").addClass("code2").html(post.toString());

const App = () => (
  <>
    <div className="container">
      <h1>Webpack</h1>
    </div>
    <div className="logo"></div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Sass</h2>
    </div>
  </>
);

render(<App />, document.getElementById("app"));
