import "./Header.css";
import data from "../../data/data";
import { ThemeToggleButton } from "./buttons/themeButton";

const { logo, name, links } = data;

export const Header = () => {
  const header = document.createElement("header");

  header.innerHTML = `
      <div class="topHeader">
        <img id="image" class="click-effect" src="${logo}" alt="imagen"/>
        <h1>${name}</h1>
      </div>
      <nav>
        <ul class="bottomHeader">
          ${links
            .map(
              (link) => `
            <li>
              <a href="${link.where}">${link.name}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </nav>
    `;
  const button = ThemeToggleButton();
  header.querySelector(".topHeader").appendChild(button);

  return header;
};

export default Header;
