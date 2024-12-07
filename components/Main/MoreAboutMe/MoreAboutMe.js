import "./MoreAboutMe.css";
import mainData from "../../../data/MainData";
const { languages, contact } = mainData;

const Languages = () => {
  return `
        <h2>🌍 Languajes: </h2> 
    ${languages
      .map(
        (Languages) => `
        <p>${Languages.language}</p>`
      )
      .join("")}
    `;
};

const Contact = () => {
  return `
        ${contact
          .map(
            (Contact) => `
            <div id="${Contact.platform}">
            <p>${Contact.platform} </p>
            <a href="${Contact.link}" target="_blank">
            <img src="${Contact.img}" alt="${Contact.platform}"/>
            </a>
        </div>`
          )
          .join("")}
            `;
};

export default { Contact, Languages };
