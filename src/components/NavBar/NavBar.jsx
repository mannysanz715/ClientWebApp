// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
      <div className='flex items-center bg-sky-700'>
        <h1 className='h-20 flex-1 text-xl text-white flex items-center justify-center'>{user.name}</h1>
        <h1 className='h-20 flex-1 text-4xl text-white flex items-center justify-center'>Clients Database</h1>
        <h1 onClick={handleLogout} className='h-20 flex-1 text-xl text-white flex items-center justify-center'>Log Out</h1>
      </div>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
