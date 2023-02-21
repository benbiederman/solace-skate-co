import team from "../../data/Team";
import TeamMember from "../TeamMember/TeamMember";
import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  return (
    <>
      <div className={styles.curved}></div>
      <section className={styles.teamSection}>
        <h3>The Squad</h3>
        <div className={styles.teamMembers}>
          {team.map((member) => {
            return <TeamMember data={member} key={member.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default TeamSection;
