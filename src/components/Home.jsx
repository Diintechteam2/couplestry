import React from 'react'
import HeroSection from './HeroSection'
import CategoryGrid from './CategoryGrid'
import ProductSection from './ProductSection'
import BottomNav from './BottomNav'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CategoryGrid />
      <ProductSection />
      <BottomNav />
    </>
  )
}
