import "./Education.css";
import mainData from "../../../data/MainData";
const { education } = mainData;

const Education = () => {
  return `
        <h2>🎓 Education</h2>
        ${education
          .map(
            (Education) => `    
            <div id="${Education.university}">
          <p> ${Education.course}.</p>
            </div>
            `
          )
          .join("")}
`;
};
export default Education;
