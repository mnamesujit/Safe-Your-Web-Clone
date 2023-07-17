import './App.scss'
import MainPage from './components/Main/MainPage'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="navbar">
      <Navbar />
      <main>
        <MainPage />
      </main>
    </div>
  )
}

export default App
