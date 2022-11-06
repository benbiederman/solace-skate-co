import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>&copy; {year} Solace Skate Co</p>
    </footer>
  );
};

export default Footer;
