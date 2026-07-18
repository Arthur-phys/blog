import { useEffect } from 'react'
import './App.css'
import Post  from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'
import { Outlet, Route, Routes } from 'react-router'
import { GetLinkedPosts } from './services/LinkedPostsService.ts'



function App() {

  useEffect(() => {
    async function saveLinkedToLocalStore() {
      let linkedPosts = await GetLinkedPosts();
      
    }
  }, [])

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
