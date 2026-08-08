import './App.css'
import Footer from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'
import Index from './components/pages/Index.tsx'
import Post  from './components/pages/Post.tsx'
import Sidebar from './components/layout/sidebar/Sidebar.tsx'
import ContentContainer from './components/layout/ContentContainer.tsx'
import { Outlet, Route, Routes } from 'react-router'



function App() {

  return (
    <>
      <div className="page">
        <Sidebar/>
        <Header/>
        <ContentContainer>
          <Routes>
            <Route index element={<Post/>}/>
            <Route path='post-index' element={<Index/>}/>
          </Routes>
        </ContentContainer>
        <Footer/>
      </div>
      <Outlet/>
    </>
  )
}

export default App
