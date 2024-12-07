import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const header = Header();
document.body.appendChild(header);

const main = Main();
document.body.appendChild(main);

const footer = Footer();
document.body.appendChild(footer);
