function SideBar(){
  return(
    <>
      <ul className="hidden md:flex flex-col bg-sky-700 w-2/8 h-full pt-40">
        <li className="text-xl px-8 py-3  text-white w-full h-20 bg-sky-700 flex items-center hover:bg-sky-500 ">Create New Customer</li>
        <li className="text-xl px-8 py-3  text-white w-full h-20 bg-sky-700 flex items-center hover:bg-sky-500 ">View Sales</li>
        <li className="text-xl px-8 py-3  text-white w-full h-20 bg-sky-700 flex items-center hover:bg-sky-500 ">Settings</li>
      </ul>
    </>
  )
}

export default SideBar;
