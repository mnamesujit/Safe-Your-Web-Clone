interface Props{
    title: string,
    description: string,
    pricing: string,
    details: string,
    button?: string
}

const Card: React.FC<Props> = ({title, description, pricing, details, button= "Contact Us"}) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <h1 className="pricing">{pricing}</h1>
      <p className="details">{details}</p>
      <button>{button}</button>
    </div>
  )
}

export default Card