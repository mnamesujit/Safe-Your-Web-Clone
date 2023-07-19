import About from "../About/About"
import IconSupportPage from "../IcoSupportPage/IconSupportPage"
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
      </>
  )
}

export default MainPage