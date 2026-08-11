import './Sidebar.css'
import LatestPosts from './LatestPosts.tsx';
import SearchBar from './SearchBar.tsx';
import MenuIcon from '../../Icons/MenuIcon.tsx'
import BrainIcon from '../../Icons/Brain.tsx';
import Pointer from '../../Icons/Pointer.tsx';
import { randomColorPick } from '../../../utils/utils.ts';
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router';
import Button from './Button.tsx';

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
        <MenuIcon stroke='var(--white)' size='3.5rem' padding='0.5rem'/>
      </div>
      <div className="sidebar-content">
        <p className="sidebar-title">Menu</p>
        <div className='category'>
          <Button
            text="Index (╭ರ_•́)"
            goTo='/post-index'
            icon={<Pointer size='2rem' padding='0' stroke='var(--white)'/>}
          />
        </div>
        <div className='category'>
          <div className='category-title'>
            <BrainIcon size='2.5rem' padding='0' stroke='var(--white)'/>
            <h3>Latest (っᵔ◡ᵔ)っ</h3>
          </div>
          <LatestPosts/>
        </div>
        <div className='category'>
          <SearchBar/>
        </div>
      </div>

    </div>
    </>
  )
}