import landingImage from '../../assets/landingImage.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={landingImage} alt="landing image" />
      <div className="page-content">
        <p>Best In Security</p>
        <h1> We Protect and Grow Your Business, </h1>
        <h1>with Bold IT Security Services</h1>
        <p>Don’t Risk Your Businesse's Future,</p>
        <p>Choose Our Top-Rated IT Security Services.</p>
        <button>Explore Our Services</button>
      </div>
    </div>
  );
}

export default LandingPage