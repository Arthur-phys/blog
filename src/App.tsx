import './App.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Index from './components/Index.tsx'
import Post  from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'
import ContentContainer from './components/shared/ContentContainer.tsx'
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
