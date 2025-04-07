import React, { useState } from 'react';
import * as echarts from 'echarts';

const TalentProfilePage = () => {
  const [activeTab, setActiveTab] = useState('smartContracts');
  const [hiringModel, setHiringModel] = useState('hourly');
  
  React.useEffect(() => {
    const chartDom = document.getElementById('skills-radar-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Solidity', max: 100 },
            { name: 'React', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: 'Blockchain', max: 100 },
            { name: 'Smart Contracts', max: 100 },
            { name: 'Web3.js', max: 100 }
          ],
          radius: 110,
          splitNumber: 4,
          axisName: {
            color: '#333',
            fontSize: 12
          }
        },
        series: [{
          type: 'radar',
          data: [{
            value: [95, 88, 82, 94, 96, 90],
            name: 'Skills',
            areaStyle: {
              color: 'rgba(79, 70, 229, 0.2)'
            },
            lineStyle: {
              color: 'rgba(79, 70, 229, 0.8)',
              width: 2
            },
            itemStyle: {
              color: 'rgba(79, 70, 229, 1)'
            }
          }]
        }],
        color: ['#4F46E5'],
        textStyle: {
          fontFamily: 'Inter, sans-serif'
        }
      };
      myChart.setOption(option);
      
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      return () => {
        myChart.dispose();
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              <i className="fas fa-arrow-left text-sm"></i> Back
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">Talent Profile</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="fas fa-comment-dots mr-2"></i> Message
            </button>
            <button className="bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 px-4 py-2 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="fas fa-user-plus mr-2"></i> Connect
            </button>
          </div>
        </div>
      </header>

      {/* Profile Overview */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative h-48">
            <img 
              src="https://public.readdy.ai/ai/img_res/977753053277af4c5bd865b234d24e61.jpg" 
              alt="Profile cover" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="px-6 py-5 flex flex-wrap md:flex-nowrap">
            <div className="relative -mt-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <div className="relative">
                <img 
                  src="https://public.readdy.ai/ai/img_res/bc63bd3a5b0332db70ddf303b7856508.jpg" 
                  alt="Profile picture" 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover object-top"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Alex Thompson</h1>
                    <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">
                      <i className="fas fa-check-circle mr-1"></i> Verified DID
                    </span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      Available
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">Senior Blockchain Developer & Smart Contract Specialist</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i> San Francisco, CA
                    <span className="mx-2">•</span>
                    <i className="fas fa-clock mr-1"></i> Responds in ~2 hours
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm">
                    <span className="text-gray-600 font-medium mr-2">Blockchain Address:</span>
                    <span className="font-mono text-xs text-gray-800">0x71C...3E47</span>
                    <button className="ml-2 text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      <i className="fas fa-copy"></i>
                    </button>
                    <span className="ml-2 text-gray-500">|</span>
                    <span className="ml-2 text-indigo-600">alexthompson.eth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hiring Models */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Hiring Preferences</h3>
                <div className="mt-2 flex space-x-2">
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-button cursor-pointer whitespace-nowrap ${hiringModel === 'hourly' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => setHiringModel('hourly')}
                  >
                    <i className="fas fa-clock mr-2"></i> Hourly ($120/hr)
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-button cursor-pointer whitespace-nowrap ${hiringModel === 'fixed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => setHiringModel('fixed')}
                  >
                    <i className="fas fa-file-contract mr-2"></i> Fixed-Contract
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-button cursor-pointer whitespace-nowrap ${hiringModel === 'equity' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => setHiringModel('equity')}
                  >
                    <i className="fas fa-chart-pie mr-2"></i> Equity-Based
                  </button>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="flex items-center mr-4">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://public.readdy.ai/ai/img_res/93fa52d6b93c1315e99cd10100d76379.jpg" alt="Client" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://public.readdy.ai/ai/img_res/5bdb1f0d97dd34ab57bf574653a41596.jpg" alt="Client" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://public.readdy.ai/ai/img_res/c8bee6eab86bf9e7f69b65315efa3eeb.jpg" alt="Client" />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Worked with 12+ clients</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                  </div>
                  <span className="ml-1 text-sm font-medium">4.8</span>
                  <span className="ml-1 text-sm text-gray-500">(36 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Smart Badges */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Certifications & Smart Badges</h2>
          <div className="flex space-x-2">
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-3 py-1 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="fas fa-filter mr-1"></i> Filter
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-3 py-1 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="fas fa-sort mr-1"></i> Sort
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="fab fa-ethereum text-blue-600 text-xl"></i>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                  <i className="fas fa-check-circle mr-1"></i> Verified on-chain
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Ethereum Developer Certification</h3>
              <p className="text-sm text-gray-600 mt-1">ConsenSys Academy</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <i className="far fa-calendar-alt mr-1"></i> Issued Apr 2024
                </div>
                <div className="text-xs text-gray-500">
                  <i className="fas fa-link mr-1"></i> ERC-1155 #7824
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                View Certificate
              </button>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          
          {/* Certificate 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-purple-600 text-xl"></i>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                  <i className="fas fa-check-circle mr-1"></i> Verified on-chain
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Smart Contract Security Expert</h3>
              <p className="text-sm text-gray-600 mt-1">OpenZeppelin</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <i className="far fa-calendar-alt mr-1"></i> Issued Feb 2024
                </div>
                <div className="text-xs text-gray-500">
                  <i className="fas fa-link mr-1"></i> ERC-1155 #5391
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                View Certificate
              </button>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          
          {/* Certificate 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fas fa-code-branch text-green-600 text-xl"></i>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                  <i className="fas fa-check-circle mr-1"></i> Verified on-chain
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Web3 Full Stack Developer</h3>
              <p className="text-sm text-gray-600 mt-1">Alchemy University</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <i className="far fa-calendar-alt mr-1"></i> Issued Dec 2023
                </div>
                <div className="text-xs text-gray-500">
                  <i className="fas fa-link mr-1"></i> ERC-1155 #3672
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                View Certificate
              </button>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
            View All Certifications <i className="fas fa-chevron-right ml-1"></i>
          </button>
        </div>
      </section>

      {/* Portfolio & Work Evidence */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio & Work Evidence</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button 
                className={`py-4 px-6 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === 'smartContracts' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('smartContracts')}
              >
                <i className="fas fa-file-code mr-2"></i> Smart Contracts
              </button>
              <button 
                className={`py-4 px-6 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === 'github' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('github')}
              >
                <i className="fab fa-github mr-2"></i> GitHub Contributions
              </button>
              <button 
                className={`py-4 px-6 text-sm font-medium cursor-pointer whitespace-nowrap ${activeTab === 'demos' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                onClick={() => setActiveTab('demos')}
              >
                <i className="fas fa-laptop-code mr-2"></i> Project Demos
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'smartContracts' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Smart Contract 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/75797f7ecdad4d9f572e10266dd9d2d3.jpg" 
                      alt="DeFi Lending Protocol" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      <i className="fas fa-check-circle mr-1"></i> Verified
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">DeFi Lending Protocol</h3>
                    <p className="text-sm text-gray-600 mt-1">Solidity smart contract for decentralized lending with automated interest rate adjustments.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Solidity</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">DeFi</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ERC-20</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        <i className="far fa-calendar-alt mr-1"></i> Completed Mar 2024
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                          <i className="fas fa-code mr-1"></i> View Code
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Smart Contract 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/897a0c672d7769971c08c78dc4b09312.jpg" 
                      alt="NFT Marketplace" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      <i className="fas fa-check-circle mr-1"></i> Verified
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">NFT Marketplace</h3>
                    <p className="text-sm text-gray-600 mt-1">Complete NFT marketplace with royalty distribution and on-chain governance features.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Solidity</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">NFT</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ERC-721</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        <i className="far fa-calendar-alt mr-1"></i> Completed Jan 2024
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                          <i className="fas fa-code mr-1"></i> View Code
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'github' && (
              <div className="space-y-6">
                {/* GitHub Contribution 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fab fa-github text-gray-600 text-xl"></i>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">ethereum/solidity</h3>
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Pull Request</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Optimized gas usage in ERC20 implementation by refactoring transfer function logic.</p>
                      <div className="mt-3">
                        <div className="text-xs text-gray-500">
                          <i className="fas fa-code-branch mr-1"></i> PR #4872 • Merged
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <i className="far fa-calendar-alt mr-1"></i> Contributed Feb 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                        View PR <i className="fas fa-external-link-alt ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* GitHub Contribution 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fab fa-github text-gray-600 text-xl"></i>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">OpenZeppelin/contracts</h3>
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Pull Request</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Added new security features to the ERC721 implementation with improved reentrancy protection.</p>
                      <div className="mt-3">
                        <div className="text-xs text-gray-500">
                          <i className="fas fa-code-branch mr-1"></i> PR #2145 • Merged
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <i className="far fa-calendar-alt mr-1"></i> Contributed Dec 2023
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                        View PR <i className="fas fa-external-link-alt ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'demos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Demo 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/3c4bc4dacb64d0ebcc35e31c3fc4e47f.jpg" 
                      alt="DEX Interface" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white font-semibold">Decentralized Exchange</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">Full-featured DEX with AMM integration, liquidity pools, and cross-chain swaps.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Web3.js</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Solidity</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-button text-xs font-medium cursor-pointer whitespace-nowrap">
                          <i className="fas fa-play mr-1"></i> Live Demo
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-xs font-medium cursor-pointer whitespace-nowrap">
                          <i className="fab fa-github mr-1"></i> Repository
                        </button>
                      </div>
                      <div className="text-xs text-gray-500">
                        <i className="far fa-eye mr-1"></i> 2.4k views
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Demo 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/6c22ed6f8d3e59e2feed052e04db49e9.jpg" 
                      alt="DAO Governance" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white font-semibold">DAO Governance Platform</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">Secure on-chain voting system with delegation, proposal creation, and transparent execution.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Ethers.js</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Solidity</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-button text-xs font-medium cursor-pointer whitespace-nowrap">
                          <i className="fas fa-play mr-1"></i> Live Demo
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-button text-xs font-medium cursor-pointer whitespace-nowrap">
                          <i className="fab fa-github mr-1"></i> Repository
                        </button>
                      </div>
                      <div className="text-xs text-gray-500">
                        <i className="far fa-eye mr-1"></i> 1.8k views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 px-6 py-4 text-center">
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
              View All Projects <i className="fas fa-chevron-right ml-1"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Matrix</h3>
                <div id="skills-radar-chart" className="w-full h-64"></div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                <div className="space-y-4">
                  {/* Blockchain */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Blockchain</span>
                      <span className="text-xs text-gray-500">Expert</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fab fa-ethereum text-blue-600 mr-2"></i>
                        <span className="text-sm">Ethereum</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-link text-blue-600 mr-2"></i>
                        <span className="text-sm">Polygon</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-cube text-yellow-600 mr-2"></i>
                        <span className="text-sm">Solana</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-cubes text-purple-600 mr-2"></i>
                        <span className="text-sm">Avalanche</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Languages */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Languages</span>
                      <span className="text-xs text-gray-500">Expert</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-file-code text-orange-600 mr-2"></i>
                        <span className="text-sm">Solidity</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fab fa-js text-yellow-600 mr-2"></i>
                        <span className="text-sm">JavaScript</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fab fa-react text-blue-600 mr-2"></i>
                        <span className="text-sm">TypeScript</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-code text-green-600 mr-2"></i>
                        <span className="text-sm">Rust</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Frameworks */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Frameworks</span>
                      <span className="text-xs text-gray-500">Advanced</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fab fa-react text-blue-600 mr-2"></i>
                        <span className="text-sm">React</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fab fa-node-js text-green-600 mr-2"></i>
                        <span className="text-sm">Node.js</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-layer-group text-purple-600 mr-2"></i>
                        <span className="text-sm">Hardhat</span>
                      </div>
                      <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <i className="fas fa-box text-red-600 mr-2"></i>
                        <span className="text-sm">Truffle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verified Skill Endorsements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Endorsement 1 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <img 
                        src="https://public.readdy.ai/ai/img_res/13279696895269a4a68acee851c39533.jpg" 
                        alt="Endorser" 
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-sm font-medium text-gray-900">Sarah Johnson</h4>
                        <div className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          <i className="fas fa-check-circle text-xs mr-1"></i> Verified
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">CTO at BlockTech Solutions</p>
                      <p className="text-sm text-gray-600 mt-2">
                        "Alex's Solidity expertise is exceptional. He delivered a complex DeFi protocol that exceeded our expectations."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Endorsement 2 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <img 
                        src="https://public.readdy.ai/ai/img_res/05a4297083f8a6de26d2030318fc82e4.jpg" 
                        alt="Endorser" 
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-sm font-medium text-gray-900">Michael Chen</h4>
                        <div className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          <i className="fas fa-check-circle text-xs mr-1"></i> Verified
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Lead Developer at CryptoVentures</p>
                      <p className="text-sm text-gray-600 mt-2">
                        "Alex's smart contract security knowledge is top-tier. He identified critical vulnerabilities in our protocol."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Endorsement 3 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <img 
                        src="https://public.readdy.ai/ai/img_res/059dc06b0734f9e56994d8d324412927.jpg" 
                        alt="Endorser" 
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-sm font-medium text-gray-900">Robert Williams</h4>
                        <div className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          <i className="fas fa-check-circle text-xs mr-1"></i> Verified
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Founder at DeFi Innovations</p>
                      <p className="text-sm text-gray-600 mt-2">
                        "Alex built our entire NFT marketplace from scratch. His technical skills and attention to detail are impressive."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Engagement Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <i className="fas fa-envelope text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Direct Contact</h3>
              <p className="text-sm text-gray-600 mt-2">Reach out directly to discuss your project requirements and explore collaboration options.</p>
              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
                <i className="fas fa-comment-dots mr-2"></i> Send Message
              </button>
            </div>
          </div>
          
          {/* Schedule Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-calendar-alt text-green-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Schedule Meeting</h3>
              <p className="text-sm text-gray-600 mt-2">Book a discovery call to discuss your project needs and determine if we're a good fit.</p>
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
                <i className="fas fa-calendar-check mr-2"></i> Schedule Call
              </button>
            </div>
          </div>
          
          {/* Escrow Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secure Escrow</h3>
              <p className="text-sm text-gray-600 mt-2">Use our blockchain-based escrow system for secure milestone payments and project protection.</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap">
                <i className="fas fa-lock mr-2"></i> Setup Escrow
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trust & Reputation</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <i className="fas fa-star text-indigo-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
                  <div className="flex items-center mt-1">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                    <span className="ml-2 text-sm text-gray-500">(36 verified reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="h-8 border-l border-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">97%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
                <div className="h-8 border-l border-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.2y</div>
                  <div className="text-sm text-gray-500">Experience</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Testimonials</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/6b34deb1629d7e165d71ef916d3caa4d.jpg" 
                      alt="Client" 
                      className="w-10 h-10 rounded-full object-cover object-top mr-3"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Emily Rodriguez</h4>
                      <p className="text-xs text-gray-500">Product Manager at DeFi Labs</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex">
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Alex delivered our DeFi protocol ahead of schedule and with exceptional quality. His deep understanding of blockchain security saved us from potential vulnerabilities. Highly recommended!"
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Mar 15, 2024</span>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                      <i className="fas fa-check-circle text-xs mr-1"></i> Verified on-chain
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src="https://public.readdy.ai/ai/img_res/ad33f2aafd3735070b5352c3b4eb9968.jpg" 
                      alt="Client" 
                      className="w-10 h-10 rounded-full object-cover object-top mr-3"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">David Wilson</h4>
                      <p className="text-xs text-gray-500">Founder at NFT Collective</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex">
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Working with Alex was a game-changer for our NFT marketplace. His smart contract implementation was flawless, and he provided excellent documentation. We'll definitely work together again."
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Feb 28, 2024</span>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                      <i className="fas fa-check-circle text-xs mr-1"></i> Verified on-chain
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                  View All Reviews <i className="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default  TalentProfilePage;


