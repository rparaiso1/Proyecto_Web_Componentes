import "./Footer.css";

const Footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <footer class="footer">
        <p>&copy; 2024 YourName. All Rights Reserved.</p>
    </footer>
    `;

  return footer;
};

export default Footer;
