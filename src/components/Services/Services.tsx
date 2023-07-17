
import  services  from '../../constants/data';
import Card from './Card';


const Services= () => {
  console.log(services)
  return (
    <div id="services-page">
      {services.map((data, key:number) => <Card key={key}  {...data} />
    )}
    </div>
  );
}

export default Services