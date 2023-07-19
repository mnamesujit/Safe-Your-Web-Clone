import { support } from "../../constants/data";
import Card from "../utility/SupportCard";

const IconSupportPage = () => {
  return (
    <div id="icon-support-page">
      <div className="support-cards">
        {support.map((data, key) => (
          <Card key={key} {...data} />
        ))}
      </div>
    </div>
  );
};

export default IconSupportPage;
