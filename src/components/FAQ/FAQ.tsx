import { faqData } from "../../constants/data"
import Card from "./Card"

const FAQ = () => {
  return (
      <div id="faq-page">
          <div className="head">
              <p>Our FAQ</p>
              <h2>Frequently Asked Questions?</h2>
          </div>
          <div className="card">
              {
                  faqData.map((data, key) => <Card key={key} {...data} />)
              }
          </div>
    </div>
  )
}

export default FAQ