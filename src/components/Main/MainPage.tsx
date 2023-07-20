import About from "../About/About"
import CompanyInfo from "../CompanyInfo/CompanyInfo"
import FAQ from "../FAQ/FAQ"
import Footer from "../Footer/Footer"
import IconSupportPage from "../IcoSupportPage/IconSupportPage"
import OurPlans from "../OurPlans/OurPlans"
import Services from "../Services/Services"
import Stats from "../Stats/Stats"
import Support from "../Support/Support"
import LandingPage from "./LandingPage"


const MainPage = () => {
  return (
      <>
      <LandingPage />
      <Services />
      <About />
      <Support />
      <Stats />
      <IconSupportPage />
      <CompanyInfo />
      <FAQ />
      <OurPlans />
      <Footer />
      </>
  )
}

export default MainPage