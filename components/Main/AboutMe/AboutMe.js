import "./AboutMe.css";
import mainData from "../../../data/MainData";
const { aboutMe } = mainData;

const Aboutme = () => {
  return `
    <h2>🧑‍💻 About Me</h2>
    <p>${aboutMe}</p>`;
};

export default Aboutme;
