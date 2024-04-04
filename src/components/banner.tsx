import { Topbar } from './topbar'
const bg_pic = '/wedding_dress.jpg'

export const Banner = () => {
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-center h-screen w-full bg-no-repeat bg-cover filter saturate-0"
        style={{ backgroundImage: `url(${bg_pic})` }}
      ></div>
      <div className="relative min-h-screen flex justify-center p-5 items-center">
        <Topbar />
        <div className="space-y-5 text-center gap-5">
          <h1 className="lg:text-4xl text-2xl  font-dancing text-[#D1FE49] drop-shadow-2xl">
            Animated Hamburger Menu
          </h1>
          <p className="max-w-lg text-sm leading-6">
            This is a simple example of how to build an animate a hamburger menu
            with React and Framer Motion. I hope you like it!
          </p>
        </div>
      </div>
    </>
  )
}
