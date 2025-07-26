import './App.css'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <ProductSection />
      <BottomNav />
      <Footer />
    </>
  )
}

export default App
