import "./skills.css"
import mainData from "../../../data/MainData";
const { skills } = mainData; 


const Skills = () => {
    return `
<ul id="skills">
  ${skills.map(skill => `
  <li>
    <p>${skill}</p>
  </li>`).join("")}
</ul>

`};
  
  export default Skills;