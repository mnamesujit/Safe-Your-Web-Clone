interface Props {
    title: string,
    score: number
}

const Card: React.FC<Props> = ({title, score}) => {
  return (
      <>
          <div className="statistics">
              <h3>{title}</h3>
              <h3>{score}%</h3>
          </div>
    </>
  )
}

export default Card