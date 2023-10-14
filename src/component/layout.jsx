import Routers from '../router/Router'
import SideBar from './SideBar'
const Layout = () => {
  return (
    <div className='flex w-full'>
      <SideBar></SideBar>
      <Routers></Routers>
    </div>
  )
}

export default Layout
