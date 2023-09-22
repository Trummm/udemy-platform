import { NavbarRoutes } from '@/components/navbar-routes'
import MobileSidebar from './mobile-sidebar'

export const Navbar = () => {
  return (
    <div className='p-4 border-0 h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}
