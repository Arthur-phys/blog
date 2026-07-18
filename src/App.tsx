import './App.css'
import Post  from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'
import { Outlet, Route, Routes } from 'react-router'



function App() {

  return (
    <>
      <div className="page">
        <Sidebar/>
        <div className='content'>
          <Routes>
            <Route index element={<Post/>}/>
          </Routes>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default App
