import { useEffect, useState } from 'react'
import * as clientsService from '../../services/clientsService.js'
import NavBar from '../../components/NavBar/NavBar.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import { Link } from 'react-router-dom';


function Home({ user, handleLogout }){
  const [clientsList, setClientsList] = useState()
  useEffect(()=>{
    (async ()=>{
      let allCustomers = await clientsService.getAllClients()
      setClientsList(allCustomers)
      })();
  },[])

  return(
    <div className='h-screen bg-sky-400 overflow-hidden'>
      <NavBar user={user} handleLogout={handleLogout}/>
      <main className='flex h-screen gap-20'>
        <SideBar/>
        <div className='rounded-t-lg w-full lg:w-7/12 h-fit mt-20 overscroll-auto flex flex-col justify-center items-center bg-white'>
          {clientsList && clientsList.map((client, idx)=> 
          <a href='#' key={idx} className='border-b w-full py-4 border-black'>
            <div>
                <Link to={'/customer/'+ client._id}>
                  <h1 className='text-black flex justify-center items-center h-12'>{client.name}</h1>
                </Link>
            </div>
          </a>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home;
