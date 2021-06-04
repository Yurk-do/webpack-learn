import * as $ from "jquery";
import Post from "./Post.js";
import "./styles/styles.css";
import xml from "./examples/data.xml";
import json from "./examples/json";
import Logo from "./examples/png-image.png";

const post = new Post("Webpack Post Title", Logo);
console.log(post.toString());
console.log("JSON", json);
console.log("XML", xml);

$("pre").addClass("code2").html(post.toString());
