import gmailImg from './assets/gmail.svg'

const Footer = () => {
  return (
    <div className='flex justify-evenly bg-black text-white h-36 items-center dark:bg-gray-950 dark:text-white tracking-wide'>
      <p>Let's Connect!</p>
      <div className='flex items-center'>
      <img className='h-8 invert pr-2' src={gmailImg} alt="" />
      <p>Email: 7775hemant.modi@gmail.com</p>
      </div>
      <p>&copy; 2024 by Hemant Modi</p>
    </div>
  )
}

export default Footer