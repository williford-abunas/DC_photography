import { NavMobile } from './nav-mobile'
import { NavDesktop } from './nav-desktop'

export const Topbar = () => {
  return (
    <div className="fixed top-5 left-0 right-16">
      <nav className="flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">⚡️</span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  )
}
