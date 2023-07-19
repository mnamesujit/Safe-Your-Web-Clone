import peopleImage from '../../assets/people.jpg';

const CompanyInfo = () => {
  return (
    <div id="company-info">
      <div className="header">
        <p>Why should You Choose Us</p>
        <h2>We are the IT Security department you’ve <br /> been dreaming of</h2>
      </div>
      <div className="content">
        <img src={peopleImage} alt="people" />
        <div className="about-company">
          <h2>Where imagination meets innovation</h2>
          <p>
            At Safe Your Web, we take security seriously. Our top-notch security
            services are designed to keep your business safe from any kind of
            cyber threat. With our expert team of security professionals, you
            can rest assured that your data and systems are in safe hands. We
            have a team of highly skilled and experienced security experts who
            are always ready to tackle any security challenge.
          </p>
          <ul>
            <li>
              Our team is comprised of some of the brightest minds in the
              security industry. We stay up-to-date with the latest trends and
              technologies to ensure that our clients always have the best
              protection available.
            </li>
            <li>
              We offer a comprehensive range of security services that can be
              tailored to your specific needs. From network security to data
              protection, we have the expertise to safeguard your business from
              any threat.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo