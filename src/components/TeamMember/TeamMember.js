import { Link } from "react-router-dom";
import styles from "./TeamMember.module.scss";

const TeamMember = ({ data }) => {
  const name = data.name;
  const url = data.name.replaceAll(" ", "-").toLowerCase();

  return (
    <Link
      to={`/team/${url}`}
      state={{
        allData: data,
      }}
      className={`${styles.teamMember} ${url}`}
      tabIndex={0}
    >
      <h4>{name}</h4>
    </Link>
  );
};

export default TeamMember;
