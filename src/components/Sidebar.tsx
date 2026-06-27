import { useEffect, useRef, useState } from 'react'
import MenuIcon from './MenuIcon.tsx'
import './Sidebar.css'
import FileIcon from './FileIcon.tsx';

export default function Sidebar({latestPosts}: {latestPosts: string[]}) {

  const [visible, setVisible] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);
  const rightSidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClicker = (e: Event) => {
      if (!sidebar.current || !e.target) {
        return;
      } else
      if (sidebar.current.contains(e.target as HTMLElement) && rightSidebar.current?.contains(e.target as HTMLElement)) {
        setVisible(v => !v);
        return;
      } else
      if (!sidebar.current.contains(e.target as HTMLElement)) {
        setVisible(false);
        return;
      }

    }
    document.addEventListener('mousedown',outsideClicker);

    return () => {
      document.removeEventListener('mousedown',outsideClicker);
    }
  }, []);

  return (
    <>
    <div className={"sidebar" + (visible ? " sidebar-visible" : "")} ref={sidebar}>   
      <div ref={rightSidebar} className="sidebar-icon">
        <MenuIcon size="5rem" padding='1rem' stroke='var(--black)'/>
      </div>
      <div className="sidebar-content">
        <p className="sidebar-title">Menu</p>
        <div className='category'>
          <input className='search-bar' placeholder='Search Posts' type="text"></input>
        </div>
        <div className='category'>
          <h3 className='category-title'>Latest (っᵔ◡ᵔ)っ</h3>
          <ul>
            {
              latestPosts.map((post, i) => (
                  <li key={i}>
                    <div className='latest-post'>
                      <FileIcon size='1.5rem' padding='0' stroke='var(--black)'/>{post}
                    </div>
                  </li>
                )
              )
            }
          </ul>
        </div>
        <div className='category'>
          <h3 className='category-title'>About me ₍^. .^₎Ⳋ </h3>
        </div>
      </div>

    </div>
    </>
  )
}