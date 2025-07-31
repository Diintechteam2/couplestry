import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" index="/" element={<Home />} />
        {/* <Route path="/category/:categoryName" element={<ProductList type="category" />} /> */}
        {/* <Route path="/category/:categoryName/subcategory/:subcategoryName" element={<ProductList type="subcategory" />} /> */}
        <Route path="/category/:categoryName/subcategory/:subcategoryName/type/:typeName" element={<ProductList type="type" />} />
        <Route path="/category/:categoryName/type/:typeName" element={<ProductList type="type" />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
