import wavingHand from './assets/waving-hand.svg'

const Landing = () => {
  return (
    <div className='px-[17%] mt-4 pb-16'>
      <div className='flex items-center font-bold tracking-tighter gap-4 pt-[10vh] pl-2'>
      <img className='h-16' src={wavingHand} alt="" />
      <h1 className='text-[56px]'>Hi, I'm Hemant Modi.</h1>
      </div>
      <div className='pr-[33%] py-4 leading-7 text-xl flex flex-col gap-8 mb-10'>
        <p>A Full Stack Web Developer with a passion for crafting delightful experiences across screens. With a keen eye for clean websitees, i am dedicated to creating elegant and visually appealing user experiences that elevate complex workflows.</p>
        <p>
          Currently, I am helping a startup pop-out on the internet with the help of intuitive website designs at <strong className='underline text-violet-700'>Paritranaya Globals</strong>.
        </p>
      </div>
      <a href="#main-work"><button className='border-2 border-black rounded-full py-3 px-4 dark:border-gray-100 transition-colors duration-400 ease-in-out hover:bg-violet-600 hover:border-violet-600 dark:hover:border-violet-600 cursor-none hover:text-white'>View My Work 👇</button></a>
    </div>
  )
}

export default Landing