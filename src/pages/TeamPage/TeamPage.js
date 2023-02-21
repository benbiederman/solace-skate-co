import { useLocation } from "react-router-dom";

const TeamPage = () => {
  const location = useLocation();
  const data = location.state.allData;

  return (
    <main>
      <figure>
        <img src={data.img} alt={data.alt} />
      </figure>
    </main>
  );
};

export default TeamPage;
