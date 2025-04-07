import React, { useState } from 'react'
import { Link } from 'react-router';

const MarketPlacePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filterOptions = [
    { id: 'price', label: 'Price' },
    { id: 'trust', label: 'Trust Score' },
    { id: 'certification', label: 'Certification' },
    { id: 'activity', label: 'Latest Activity' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const softwareListings = [
    {
      id: 1,
      name: 'ProjectFlow Pro',
      description: 'Advanced project management solution with AI capabilities',
      image: 'https://public.readdy.ai/ai/img_res/e17e7ca1c7d85fbedd54596644ced49e.jpg',
      trustScore: 92,
      certificationLevel: 'Premium',
      verified: true,
      rating: 4.8,
      reviews: 245,
      linkedTalents: 37,
      price: '$49/mo'
    },
    {
      id: 2,
      name: 'DataViz Studio',
      description: 'Data visualization platform for business intelligence',
      image: 'https://public.readdy.ai/ai/img_res/dd7e17fb7a974b86422e09a64f2dbab2.jpg',
      trustScore: 88,
      certificationLevel: 'Advanced',
      verified: true,
      rating: 4.6,
      reviews: 189,
      linkedTalents: 24,
      price: '$39/mo'
    },
    {
      id: 3,
      name: 'SecureCloud',
      description: 'Enterprise-grade cloud security and management',
      image: 'https://public.readdy.ai/ai/img_res/d6799f39034b7fec0a54fc52cc42d417.jpg',
      trustScore: 95,
      certificationLevel: 'Enterprise',
      verified: true,
      rating: 4.9,
      reviews: 312,
      linkedTalents: 42,
      price: '$89/mo'
    }
  ];

  const talentListings = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Full Stack Developer',
      image: 'https://public.readdy.ai/ai/img_res/52c9bbf354fc94e4eab57ac337c5ada6.jpg',
      skills: ['React', 'Node.js', 'AWS'],
      available: true,
      trustScore: 91,
      rating: 4.7,
      reviews: 28
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'DevOps Engineer',
      image: 'https://public.readdy.ai/ai/img_res/13e9f8f30280ee4a864c24f6304feafe.jpg',
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
      available: false,
      trustScore: 89,
      rating: 4.8,
      reviews: 32
    }
  ];

  const agencyListings = [
    {
      id: 1,
      name: 'Nexus Digital',
      expertise: 'Full-service software development',
      image: 'https://public.readdy.ai/ai/img_res/c69123c933293c03a1878db6479bc083.jpg',
      skills: ['Web Dev', 'Mobile Apps', 'AI Solutions'],
      trustScore: 94,
      rating: 4.9,
      reviews: 87
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechNova Inc.',
      deadline: '5 days',
      skills: ['React', 'TypeScript', 'Redux'],
      proposals: 12
    },
    {
      id: 2,
      title: 'Cloud Security Specialist',
      company: 'SecureWave',
      deadline: '3 days',
      skills: ['AWS', 'Security', 'Compliance'],
      proposals: 8
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'CreativeMinds',
      deadline: '7 days',
      skills: ['Figma', 'UI Design', 'User Research'],
      proposals: 15
    },
    {
      id: 4,
      title: 'Data Engineer',
      company: 'DataFlow Systems',
      deadline: '4 days',
      skills: ['Python', 'SQL', 'ETL'],
      proposals: 10
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
   

    {/* Main Content */}
    <main className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-600">Discover trusted software, talents, and agencies</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="pl-4 text-gray-400">
            <i className="fas fa-search text-lg"></i>
          </div>
          <input 
            type="text" 
            placeholder="Search software, talents, agencies..." 
            className="w-full py-4 px-3 text-gray-700 focus:outline-none border-none text-base"
          />
          <button className="bg-indigo-600 text-white px-6 py-4 hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-sliders-h mr-2"></i>
            Advanced
          </button>
        </div>
      </div>

      {/* Filters & Sorting */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap !rounded-button ${
                  activeFilters.includes(filter.id)
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                {filter.label}
                {activeFilters.includes(filter.id) && (
                  <i className="fas fa-check ml-2 text-xs"></i>
                )}
              </button>
            ))}
            
            {activeFilters.length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-indigo-600 text-sm hover:text-indigo-800 cursor-pointer whitespace-nowrap !rounded-button"
              >
                Clear all
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">View:</span>
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded cursor-pointer !rounded-button ${viewMode === 'grid' ? 'bg-gray-100 text-indigo-600' : 'text-gray-500'}`}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded cursor-pointer !rounded-button ${viewMode === 'list' ? 'bg-gray-100 text-indigo-600' : 'text-gray-500'}`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
            
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Software Listings */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Software</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
            View all <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {softwareListings.map(software => (
            <div key={software.id} className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`${viewMode === 'list' ? 'w-1/4 p-6' : 'p-6 pb-0'}`}>
                <div className="relative">
                  <img 
                    src={software.image} 
                    alt={software.name} 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {software.trustScore}%
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'w-3/4' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{software.name}</h3>
                  <div className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{software.certificationLevel}</span>
                    {software.verified && (
                      <span className="ml-2 text-blue-500">
                        <i className="fas fa-check-circle"></i>
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{software.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(software.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">{software.reviews} reviews</span>
                  </div>
                  <span className="font-bold text-gray-900">{software.price}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    <i className="fas fa-users text-indigo-400 mr-1"></i> {software.linkedTalents} certified talents
                  </span>
                  <Link to={`/marketplace/:${software.id}`} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                    View details
                  </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Talent & Agency Listings */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Talents & Agencies</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
            View all <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {/* Talent Cards */}
          {talentListings.map(talent => (
            <div key={talent.id} className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`${viewMode === 'list' ? 'w-1/4 p-6' : 'p-6'}`}>
                <div className="relative flex justify-center">
                  <img 
                    src={talent.image} 
                    alt={talent.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {talent.trustScore}%
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'w-3/4' : ''}`}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{talent.name}</h3>
                  <p className="text-gray-600">{talent.title}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${talent.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {talent.available ? 'Available for hire' : 'Currently busy'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {talent.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(talent.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{talent.reviews} reviews</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                   <Link  to={`/talent/${talent.id}`}
                   >
                    View Profile
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Agency Cards */}
          {agencyListings.map(agency => (
            <div key={agency.id} className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`${viewMode === 'list' ? 'w-1/4 p-6' : 'p-6'}`}>
                <div className="relative flex justify-center">
                  <img 
                    src={agency.image} 
                    alt={agency.name} 
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {agency.trustScore}%
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'w-3/4' : ''}`}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{agency.name}</h3>
                  <p className="text-gray-600">{agency.expertise}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {agency.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(agency.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{agency.reviews} reviews</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    View Agency
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Job Postings */}
      {/* <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Job Postings</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
            View all <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobPostings.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-orange-500 mb-2">
                  <i className="fas fa-clock mr-2"></i>
                  <span className="text-sm font-medium">Deadline: {job.deadline}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span className="text-sm">{job.proposals} proposals</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to explore more?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Discover thousands of certified software solutions, talented professionals, and trusted agencies in our comprehensive marketplace.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors shadow-md cursor-pointer !rounded-button whitespace-nowrap">
            Explore the Full Marketplace
          </button>
        </div>
      </section>
    </main>

  
 
  </div>


  )
}

export default MarketPlacePage






// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
