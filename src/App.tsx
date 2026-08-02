import './App.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Index from './components/Index.tsx'
import Post  from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'
import { Outlet, Route, Routes } from 'react-router'



function App() {

  return (
    <>
      <div className="page">
        <Sidebar/>
        <Header/>
        <div className='content'>
          <Routes>
            <Route index element={<Post/>}/>
            <Route path='post-index' element={<Index/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      <Outlet/>
    </>
  )
}

export default App
