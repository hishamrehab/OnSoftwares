import React from 'react'
import {  Routes , BrowserRouter as Router , Route  } from 'react-router'
import HomePage from '../pages/HomePage'
import MarketPlacePage from '../pages/MarketPlacePage'
import CompaniesPage from '../pages/CompaniesPage'
import CompanyProfilePage from '../pages/CompanyProfilePage'
import TalentProfilePage from '../pages/TalentProfilePage'
import SoftwareProfilePage from '../pages/SoftwareProfilePage'
import ContactUsPage from '../pages/ContactUsPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginForm from '../auth/Login'
import RegisterForm from '../auth/register'
import NavBar from '../components/Navbar'
import PricingPage from '../pages/PricingPage'
import Footer from '../sections/Footer'

const AppRoutes = () => {
  return (
     <div className='min-h-screen bg-white text-gray-800 font-sans w-full'>
        <Router>
        <NavBar />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='marketplace' element={<MarketPlacePage />}/>
        <Route path='companies' element={<CompaniesPage />}/>
        <Route path='company-profile/:companyId' element={<CompanyProfilePage />}/>
        <Route path='talent/:id' element={<TalentProfilePage />}/>
        <Route path='marketplace/:id' element={<SoftwareProfilePage />}/>
        <Route path='contact-us' element={<ContactUsPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Router>
</div>

  )
}

export default AppRoutes
