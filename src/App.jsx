    import React from 'react'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import Contact from './Contact.jsx'

export default function App(){
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Products />
        <Contact />
      </main>
      <footer className="bg-white border-t py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600">© {new Date().getFullYear()} 나인티투 (NinetyTwo). All rights reserved.</div>
      </footer>
    </div>
  )
}
