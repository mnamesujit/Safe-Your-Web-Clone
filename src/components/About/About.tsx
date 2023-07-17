import { about } from "../../constants/data";
import Card from "../utility/Card";

const About = () => {
  return (
    <div id="about-page">
      {about.map((data, key: number) => (
        <Card key={key} {...data} />
      ))}
    </div>
  );
}

export default About