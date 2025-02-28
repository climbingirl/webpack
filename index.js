import "./index.css";
import logo from "./assets/rollup_logo.png";

console.log("Hello World!");

const header = document.createElement("h1");
header.textContent = "I love JavaScript";
const img = document.createElement("img");
img.src = logo;
document.body.append(header, img);
