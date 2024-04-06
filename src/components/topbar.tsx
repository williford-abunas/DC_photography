import { NavMobile } from './nav-mobile'
import { NavDesktop } from './nav-desktop'

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 lg:right-16 bg-neutral-950 lg:bg-transparent z-10">
      <nav className="flex items-center justify-end py-1 lg:py-2">
        <span className="lg:mr-48 lg:pr-24 pt-2 ">
          <img
            src="/dc-photography-high-resolution-logo-transparent.webp"
            alt="logo"
            className="lg:w-28 w-12"
          />
        </span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  )
}
