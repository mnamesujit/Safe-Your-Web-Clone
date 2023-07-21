import { support } from "../../constants/data";
import Card from "../utility/SupportCard";

const Support = () => {
    return (
      <div id="support-page">
        <div className="container">
          <p>All our IT support in one place</p>
          <h1>
            We secure digital assets that will make your bussiness more
            efficient
          </h1>
        </div>
        <div className="support-cards">
          {support.map((data, key) => (
            <Card key={key} {...data} />
          ))}
        </div>
      </div>
    );
};

export default Support;
