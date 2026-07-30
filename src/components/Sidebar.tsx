import './Sidebar.css'
import LatestPosts from './LatestPosts.tsx';
import SearchBar from './SearchBar.tsx';
import MenuIcon from './MenuIcon.tsx'
import BrainIcon from './Brain.tsx';
import { useEffect, useRef, useState } from 'react'
import { randomColorPick } from '../utils/utils.ts';

export default function Sidebar() {

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
    <div className={"sidebar mobile-sidebar" + (visible ? " sidebar-visible" : "")} ref={sidebar}>   
      <div ref={rightSidebar} className="mobile-icon sidebar-icon">
        <MenuIcon stroke='var(--black)'/>
      </div>
      <div className="sidebar-content">
        <p className="sidebar-title">Menu</p>
        <div className='category'>
          <SearchBar/>
        </div>
        <div className='category'>
          <div className='category-title'>
            <BrainIcon size='2rem' padding='0' stroke='var(--black)'/>
            <h3>Latest (っᵔ◡ᵔ)っ</h3>
          </div>
          <LatestPosts/>
        </div>
        <div className='category'>
          <div className='category-title'>
          <BrainIcon size='2rem' padding='0' stroke='var(--black)'/>
          <h3 className={"category-link" + ` hover-${randomColorPick()}`}>
            Index (╭ರ_•́)
          </h3>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}