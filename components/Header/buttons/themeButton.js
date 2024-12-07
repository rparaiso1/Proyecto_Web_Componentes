import "./themeButton.css";

export const ThemeToggleButton = () => {
  const button = document.createElement("button");
  button.classList = "theme-toggle";

  const sunIcon = document.createElement("span");
  sunIcon.classList.add("icon");
  sunIcon.textContent = "☀️";

  const moonIcon = document.createElement("span");
  moonIcon.classList.add("icon");
  moonIcon.textContent = "🌙";

  button.appendChild(sunIcon);
  button.appendChild(moonIcon);

  const updateIcons = () => {
    const isDarkMode = document.body.classList.contains("dark-mode");
    sunIcon.style.opacity = isDarkMode ? 0 : 1;
    moonIcon.style.opacity = isDarkMode ? 1 : 0;
  };

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateIcons();
  });

  updateIcons();

  return button;
};

export default ThemeToggleButton;
