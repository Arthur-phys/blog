import MenuIcon from './MenuIcon.tsx'
import './Sidebar.css'

export default function Sidebar({latestPosts}: {latestPosts: string[]}) {
  return (
    <>
    <div className='sidebar'>   
      <div className="sidebar-icon">
        <MenuIcon size="5rem" padding='1rem'/>
      </div>
      <div className="sidebar-content">
        <p className="sidebar-title">Menu</p>
        <div className='category'>
          <input className='search-bar' placeholder='Search Posts' type="text"></input>
        </div>
        <div className='category'>
          <p>Latest!</p>
          <ul>
            {
              latestPosts.map(post => (
                  <li>{post}</li>
                )
              )
            }
          </ul>
        </div>
        <div className='category'>
          <p>About me</p>
        </div>
      </div>

    </div>
    </>
  )
}