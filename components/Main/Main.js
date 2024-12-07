import "./Main.css";
import data from "../../data/data";
import Aboutme from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import MoreAboutMe from "./MoreAboutMe/MoreAboutMe";

const { Contact, Languages } = MoreAboutMe;
const { links } = data;

export const Main = () => {
  const main = document.createElement("main");
  links.forEach((link) => {
    const section = document.createElement("section");
    section.id = link.id;
    main.appendChild(section);
  });
  document.body.appendChild(main);

  const aboutMeSection = document.getElementById("aboutMe");
  if (aboutMeSection) {
    aboutMeSection.innerHTML = Aboutme();
  }

  const languageSection = document.getElementById("language");
  if (languageSection) {
    languageSection.innerHTML = Languages();
  }
  const constactSection = document.getElementById("contact");
  if (constactSection) {
    constactSection.innerHTML = Contact();
  }

  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    skillsSection.innerHTML = Skills();
  }

  const experienceSection = document.getElementById("experience");
  if (experienceSection) {
    experienceSection.innerHTML = Experience();
  }

  const educationSection = document.getElementById("education");
  if (educationSection) {
    educationSection.innerHTML = Education();
  }
  return main;
};

export default Main;
