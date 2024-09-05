
import './App.css'
import Hero from './components/Hero/Hero'
import Services from './components/ServicesC/Services'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App
