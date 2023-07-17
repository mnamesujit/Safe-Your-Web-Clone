interface servicesProps{
    icon: string,
    title: string,
    content: string
}

const Card: React.FC<servicesProps> = ({icon, title, content}) => {
  console.log("called and printing")
  return (
    <>
          <div className="cards">
          <img src={icon} alt="icon" />    
              <h2 className="services-title">{title}</h2>
        <p className="services-content">
                  {content}
        </p>
      </div>
    </>
  );
}

export default Card