import { NavMobile } from './nav-mobile'
import { NavDesktop } from './nav-desktop'

export const Topbar = () => {
  return (
    <div className="fixed lg:top-5 top-0 left-0 right-0 lg:right-16 bg-neutral-950 lg:bg-transparent z-10">
      <nav className="flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">⚡️</span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  )
}
