import Image from "next/image";
import "./card.styles.css";

const Card = ({ robot }) => {
  const { id, name, email } = robot;

  return (
    <div className="card-container">
      <Image
        src={`https://robohash.org/${id}?size=180x180`}
        alt="robot_photo"
        width={180}
        height={180}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
