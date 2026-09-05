import './App.css'
import Footer from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'
import Index from './components/pages/Index.tsx'
import Post  from './components/pages/Post.tsx'
import Sidebar from './components/layout/sidebar/Sidebar.tsx'
import ContentContainer from './components/layout/ContentContainer.tsx'
import { Outlet, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { SlugEntryMapService } from './services/postService.ts'



function App() {

  useEffect(() => {
    async function retrieveMap() {
      const conversionMap = await SlugEntryMapService();
      Object.entries(conversionMap).forEach(([key, val]) => {
        window.localStorage.setItem(key,val);
      })
    }
    retrieveMap()
  },[])
  const [waveEffect, setWaveEffect] = useState<boolean>(false) 

  return (
    <>
      <div className="page">
        <Sidebar/>
        <Header setWaveEffect={setWaveEffect}/>
        <ContentContainer>
          <Routes>
            <Route index element={<Post/>}/>
            <Route path='post-index' element={<Index/>}/>
          </Routes>
        </ContentContainer>
        <Footer activateWave={waveEffect}/>
      </div>
      <Outlet/>
    </>
  )
}

export default App
