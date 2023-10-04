"use client";
import Image from "next/image";
import "./card.styles.css";

const imageLoader = ({ src }) => {
  return `https://${src}?size=180x180`;
};

const Card = ({ robot }) => {
  const { id, name, email } = robot;

  return (
    <div className="card-container">
      <Image
        loader={imageLoader}
        src={`robohash.org/${id}`}
        alt="robot_photo"
        width={180}
        height={180}
        placeholder="empty"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
