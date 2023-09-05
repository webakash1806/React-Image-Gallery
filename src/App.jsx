import GalleryData from "./Components/GalleryData"
import { Routes, Route } from 'react-router-dom'
import GetImageDetail from "./Components/ImageDetailComponent/GetImageDetail"

function App() {

  return (
    <div className='w-screen flex flex-col justify-center items-center gap-4'>
      <p className='font-bold font-serif text-4xl sm:text-5xl py-8 w-full text-center tracking-wide text-white'>Image Gallery</p>
      <Routes>
        <Route path="/React-Image-Gallery" element={<GalleryData />} />
        <Route path="/React-Image-Gallery/detail/:id" element={<GetImageDetail />} />
      </Routes>
    </div>

  )
}

export default App
