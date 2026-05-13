'use client'

import React, { useState, useEffect } from 'react'
import { FaMapMarkedAlt, FaCompass, FaRulerCombined, FaMapSigns, FaMountain, FaGem, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaFacebook, FaCheckCircle } from 'react-icons/fa'
import { GiTelescopicBaton } from 'react-icons/gi'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const surveyingServices = [
    { icon: FaMapMarkedAlt, title: 'Relocation Survey', description: 'Accurate property boundary relocation and verification' },
    { icon: FaCompass, title: 'Original Survey', description: 'First-time land surveying and documentation' },
    { icon: FaRulerCombined, title: 'Subdivision Survey', description: 'Professional land subdivision and parcel mapping' },
    { icon: FaMapSigns, title: 'Consolidation Survey', description: 'Merging multiple parcels into single property' },
    { icon: GiTelescopicBaton, title: 'Verification Survey', description: 'Property verification and boundary confirmation' },
    { icon: FaMountain, title: 'Topographic Survey', description: 'Detailed terrain elevation and contour mapping' },
    { icon: FaGem, title: 'Mineral Survey', description: 'Mineral claims and resource mapping' },
  ]

  const mappingServices = [
    { icon: FaMapSigns, title: 'Sketch Plan', description: 'Preliminary property layout and planning' },
    { icon: FaMapMarkedAlt, title: 'Land Use Mapping', description: 'Comprehensive land utilization analysis' },
    { icon: FaGem, title: 'Mineral Claims', description: 'Mining claim documentation and mapping' },
    { icon: FaCompass, title: 'Other Land-Related Services', description: 'Custom mapping solutions for your needs' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className={`font-bold text-xl ${isScrolled ? 'text-navy-900' : 'text-white'}`}>ChaDa</h1>
                <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Surveying & Mapping</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>Home</a>
              <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>Services</a>
              <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>About</a>
              <a href="#contact" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>Contact</a>
              <a href="#contact" className="btn-primary">Get Quote</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <FaTimes className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} /> : <FaBars className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#contact" className="btn-primary block text-center" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <FaCheckCircle className="text-green-400" />
              <span className="text-white text-sm">Professional Land Surveying Services</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Surveying</span><br />
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Mapping</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Your trusted partner for land surveying and mapping services in Surigao del Sur
          </p>
          
          <p className="text-2xl md:text-3xl font-bold text-primary-400 mb-12 italic">
            "Sa ChaDa, chada ang resulta!"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="btn-primary text-lg px-8 py-4">
              Explore Services
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-lg">
              Contact Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive surveying and mapping solutions tailored to your needs</p>
          </div>

          {/* Surveying Services */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <div className="h-1 w-16 bg-primary-600 mr-4"></div>
              <h3 className="text-3xl font-bold text-navy-900">Surveying Services</h3>
              <div className="h-1 w-16 bg-primary-600 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {surveyingServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mapping Services */}
          <div>
            <div className="flex items-center justify-center mb-10">
              <div className="h-1 w-16 bg-navy-600 mr-4"></div>
              <h3 className="text-3xl font-bold text-navy-900">Mapping Services</h3>
              <div className="h-1 w-16 bg-navy-600 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mappingServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-navy-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Professional Surveying You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ChaDa Surveying and Mapping Services is your reliable partner for all land surveying and mapping needs in Surigao del Sur. With years of experience and a commitment to precision, we deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether it's your land or your future development plans, we've got you covered with professional surveying and mapping services. Our team of licensed geodetic engineers ensures accurate, timely, and reliable results.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Licensed Professionals</h4>
                    <p className="text-gray-600">Certified geodetic engineers with extensive expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Modern Equipment</h4>
                    <p className="text-gray-600">State-of-the-art surveying technology and tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Free Consultation</h4>
                    <p className="text-gray-600">Expert advice and project assessment at no cost</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-primary inline-block">
                Get Started Today
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-navy-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-4xl">C</span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">ChaDa Surveying</h3>
                    <p className="text-primary-600 font-semibold italic">"Sa ChaDa, chada ang resulta!"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="text-primary-600 mr-3" />
                      <span>Caracal, Surigao del Sur, 8318</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaPhone className="text-primary-600 mr-3" />
                      <span>+63 938 389 1051</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaEnvelope className="text-primary-600 mr-3" />
                      <span>chadasurveys@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get professional surveying and mapping services with guaranteed results. Contact us today for a free consultation!
          </p>
          <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block text-lg shadow-xl">
            Request Free Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We're here to help with all your surveying and mapping needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">Caracal, Surigao del Sur, 8318</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">+63 948 086 4597 (Smart)</p>
                    <p className="text-gray-600">+63 956 409 9021 (Globe)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">chadasurveys@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaFacebook className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Follow Us</h4>
                    <a href="https://facebook.com/profile.php" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">
                      ChaDa Surveying and Mapping Services
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-navy-700 rounded-xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="juan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+63 912 345 6789"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="relocation">Relocation Survey</option>
                      <option value="original">Original Survey</option>
                      <option value="subdivision">Subdivision Survey</option>
                      <option value="consolidation">Consolidation Survey</option>
                      <option value="verification">Verification Survey</option>
                      <option value="topographic">Topographic Survey</option>
                      <option value="mineral">Mineral Survey</option>
                      <option value="mapping">Land Use Mapping</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">ChaDa</h3>
                  <p className="text-sm text-gray-400">Surveying & Mapping</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional land surveying and mapping services in Surigao del Sur. Sa ChaDa, chada ang resulta!
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400">Caracal, Surigao del Sur</p>
                <p className="text-gray-400">chadasurveys@gmail.com</p>
                <p className="text-gray-400">+63 948 086 4597</p>
              </div>
              <a href="https://facebook.com/profile.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
                <FaFacebook size={24} />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} ChaDa Surveying and Mapping Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
