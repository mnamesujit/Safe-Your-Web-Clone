
import  services  from '../../constants/data';
import Card from '../utility/Card';


const Services= () => {
  return (
    <div id="services-page">
      {services.map((data, key:number) => <Card key={key}  {...data} />
    )}
    </div>
  );
}

export default Services