import { useClickAway } from 'react-use'
import { useRef } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import { routes } from '../routes'

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setIsOpen(false))
  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      <AnimatePresence>
        {isOpen && (
          <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
            <ul className="grid gap-2">
              {routes.map((route, index) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index / 10,
                  }}
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <a
                    className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                    href={route.href}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    <p className="flex gap-1 text-xl mx-auto font-dancing">
                      {route.title}
                    </p>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
