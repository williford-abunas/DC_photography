import { routes } from '../routes'

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-11 text-lg">
      {routes.map((route) => {
        const { href, title } = route
        return (
          <li>
            <a
              href={href}
              className="flex items-center hover:scale-110 hover:text-[#D1FE49] transition-all tracking-wide font-semibold drop-shadow-lg"
            >
              {title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
