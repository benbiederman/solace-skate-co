import { Link } from "react-router-dom";
import styles from "./TeamMember.module.scss";

const TeamMember = ({ data }) => {
  const name = data.name;
  const url = data.name.replaceAll(" ", "-").toLowerCase();

  return (
    <section className={`${styles.teamMember} ${url}`}>
      <h4>{name}</h4>
    </section>
  );
};

export default TeamMember;
