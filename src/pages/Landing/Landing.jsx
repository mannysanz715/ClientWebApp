
import NavBar from '../../components/NavBar/NavBar.jsx'
import Home from '../Home/Home.jsx'
import LoginPage from '../Login/Login.jsx'
import { Link, useNavigate } from 'react-router-dom'


const Landing = ({ user, handleAuthEvt, handleLogout }) => {
  const navigate = useNavigate()
  !user && navigate('/auth/login') 
  return (
    <>
      {user ? <Home user={user} handleLogout={handleLogout}/> : <LoginPage handleAuthEvt={handleAuthEvt} />}

    </>
  )
}

export default Landing
