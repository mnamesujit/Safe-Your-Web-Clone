interface Props{
    image?: string,
    heading?:string,
    title?: string,
    content?: string
}

const Card: React.FC<Props> = ({image, heading, title, content}) => {
  console.log("called and printing")
  return (
    <>
      <div className="cards">
        <img src={image} alt="icon" />
        <div className="container">
          <p className="heading">{heading}</p>
          <h2 className="title">{title}</h2>
          <p className="content">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Card