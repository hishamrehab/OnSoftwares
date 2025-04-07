import React from 'react'
import Header from '../sections/Header'
import KeyFeaturesSection from '../sections/KeyFeaturesSection'
import HowItWorks from '../sections/HowItWorks'
import TestimonialsSection from '../sections/TestimonialsSection'
import MarketplacePreview from '../sections/MarketplacePreview'
import SecuritySection from '../sections/SecuritySection'
import CtaBanner from '../sections/CtaBanner'

const HomePage = () => {
  return (
    <div>
     <Header />
      <KeyFeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <MarketplacePreview />
      <SecuritySection />
      <CtaBanner />
    </div>
  )
}

export default HomePage
