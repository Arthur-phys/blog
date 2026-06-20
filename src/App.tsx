import './App.css'
import MenuIcon from './Menu.tsx'
import Post  from './Post.tsx'

function Sidebar({latestPosts}: {latestPosts: string[]}) {
  return (
    <>
    <div>
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
        {
          latestPosts.map(post => (
              <p>{post}</p>
            )
          )
        }
        </div>
        <div className='category'>
          <p>About me</p>
        </div>
      </div>

    </div>
      <div className='content'>
          <Post title="Is this working?" sections={[
            {
              title: "A title",
              text: "Nisi cillum commodo esse ipsum ex incididunt. Fugiat voluptate cupidatat veniam tempor consectetur sit pariatur sunt minim reprehenderit ut consequat aliquip. Pariatur Lorem adipisicing pariatur aliquip ex excepteur veniam. Laboris duis occaecat labore Lorem consequat laboris fugiat irure nostrud cillum. Sunt eiusmod laborum exercitation nostrud quis exercitation duis consectetur amet aliquip amet excepteur est veniam. Est qui laborum duis minim eiusmod velit exercitation commodo irure sunt mollit ut. Cupidatat ullamco aute ullamco mollit incididunt irure ullamco. Dolore ullamco qui deserunt eiusmod proident velit.Non non non elit minim veniam tempor amet esse dolore anim eu dolor. Mollit adipisicing consectetur proident non veniam mollit mollit qui ea laboris cillum Lorem adipisicing est. Ullamco nisi reprehenderit amet commodo sint sunt eiusmod magna esse ex ea sit id adipisicing. Anim enim anim do est amet laboris cupidatat. Eu et sunt ipsum do do culpa elit consectetur proident aliquip ex. Amet excepteur sit est anim commodo non magna duis tempor qui ipsum mollit deserunt duis. Adipisicing mollit qui nisi cupidatat.",
              image: ""
            }
          ]}/>
      </div>
    </div>
    </>
  )
}

function App() {

  return (
    <>
      <div className="page">
        <Sidebar latestPosts={["a","b","c"]}/>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default App
