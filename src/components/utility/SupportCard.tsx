interface Props {
  image?: string;
  title?: string;
}

const Card: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
