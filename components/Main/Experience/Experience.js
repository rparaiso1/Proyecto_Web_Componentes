import "./Experience.css";
import mainData from "../../../data/MainData";
const { experience } = mainData;

const Experience = () => {
  return `
        <h2>💻 Experience</h2>
        ${experience
          .map(
            (Experience) => `
        <div>
        <div id="${Experience.company}">    
            <h3>${Experience.company}: ${Experience.time}</h3>
            <p>${Experience.position}</p>
            <p>${Experience.duties}</p>
        </div>
        `
          )
          .join("")}
`;
};

export default Experience;
