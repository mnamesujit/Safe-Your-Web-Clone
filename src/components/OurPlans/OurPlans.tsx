import { plans } from "../../constants/data"
import Card from "./Card"


const OurPlans = () => {
  return (
    <div id="our-plans">
      {
        plans.map((data, key) => <Card key={key} {...data} />)
      }
    </div>
  )
}

export default OurPlans