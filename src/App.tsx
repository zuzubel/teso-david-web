import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import JsonLd from './components/JsonLd'

export default function App() {
  return (
    <BrowserRouter basename="/teso-david">
      <JsonLd />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sluzby" element={<Services />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
