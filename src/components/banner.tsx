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
          <h1 className="lg:text-5xl text-2xl  font-dancing text-[#fff1f2] drop-shadow-2xl font-bold">
            Affordable, Quality Photos <br />
            <span>Capturing Moments,</span>
            <br />
            <span>Creating Memories</span>
          </h1>
          <hr className="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-12 dark:bg-gray-700"></hr>
        </div>
      </div>
    </>
  )
}
