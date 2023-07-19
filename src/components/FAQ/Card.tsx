interface Props {
    question: string,
    ans: string
}

const Card:React.FC<Props> = ({question, ans}) => {
  return (
      <div className="container">
          <h3>Q) &nbsp; {question}</h3>
          <p>Ans. &nbsp; {ans}</p>
      </div>
  )
}

export default Card