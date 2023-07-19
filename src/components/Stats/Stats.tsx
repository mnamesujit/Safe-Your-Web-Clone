import { stats } from "../../constants/data";
import Card from "./Card";
import statsImage from "..//../assets/stats-page.jpeg";

const Stats = () => {
  return (
    <div id="stats-page">
      <div className="stats-content">
        <div className="headlines">
          <p className="lead-text">Our Company Expertise</p>
          <h2>
            At IT Security, we take pride in our work and enjoy the satisfaction
            of a job well done
          </h2>
          <p className="description">
            we understand that your business’s success depends on the security
            and protection of your valuable data and intellectual property.
          </p>
        </div>
        <div className="card">
          {stats.map((data, key) => (
            <Card key={key} {...data} />
          ))}
        </div>
      </div>
      <div className="image-container">
        <img src={statsImage} alt="image" />
      </div>
    </div>
  );
};

export default Stats;
