import { useEffect, useState } from 'react'
import './App.css'
import Post  from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'
import { PostService } from './services/postService.ts'
import type { PostObject } from './interfaces/post.ts'



function App() {

  let [content, setContent] = useState<PostObject>()
  useEffect(() => {
      const getContent = async () => {
        const postContent = PostService("welcome");
        const data = await postContent;
        setContent(data);
      }
      getContent();
  },[]);

  return (
    <>
      <div className="page">
        <Sidebar latestPosts={["Welcome to my page!"]}/>
        <div className='content'>
          <Post title={content ? content.post.title : "Upss!! I did not find that ( ˶°ㅁ°) !!"} sections={content ? content.post.sections : []}/>
        </div>
      </div>
    </>
  )
}

export default App
