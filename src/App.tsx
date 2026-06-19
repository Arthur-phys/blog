import './App.css'
import MenuIcon from './Menu.tsx'

function Sidebar() {
  return (
    <>
      <div className={`sidebar`}>
	<div className="sidebar-icon">
	  <p className="sidebar-title"> Menu </p>
	  <MenuIcon size={"3rem"}/>
	</div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <div className="page">
	<Sidebar/>
	<div style={{flexGrow: 1}}>aaaaaaaaaaaaaaaaaaaaaaa</div>
      </div>
    </>
  )
}

export default App
