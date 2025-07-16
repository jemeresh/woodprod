import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage  from './pages/home/home.js'
import GalleryPage from './pages/gallery.tsx'
import PricePage from './pages/price.tsx'
import ContactPage from './pages/contact.tsx'
import AboutUsPage from './pages/aboutus.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/price" element={<PricePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App