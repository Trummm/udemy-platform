'use client'

import { Layout, Compass } from 'lucide-react'
import SidebarItem from './sidebar-item'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
]

export const SidebarRoutes = () => {
  const routes = guestRoutes

  return (
    <div className='flex flex-col w-full'>
      {routes.map(({ icon, label, href }) => (
        <SidebarItem key={href} icon={icon} label={label} href={href} />
      ))}
    </div>
  )
}
