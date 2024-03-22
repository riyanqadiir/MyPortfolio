import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import "./assets/css/style.css"
import "./assets/vendor/aos/aos.css"
import HomePage from './components/Pages/homePage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/common/backToTop'
import AboutPage from './components/Pages/aboutPage'
import Resume from './components/Pages/resume'
import Service from './components/Pages/service'
import Contact from './components/Pages/contact'
function App() {

  return (
    <>
    
    <Router>
      <Header />
      <main id="main">
      <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path='/about' element = {<AboutPage />} />
      <Route path='/resume' element = {<Resume />} />
      <Route path='/services' element = {<Service />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
      </main>
        <Footer/>
    <BackToTop/>

    </Router> 
   
    </>
  )
}

export default App
