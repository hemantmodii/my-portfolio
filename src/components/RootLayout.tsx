import { Outlet } from 'react-router-dom'
import Navbar from '@/Navbar'
import Footer from '@/Footer'
const RootLayout = () => {
  return (
    <div>
          <Navbar />  
        <section className="">
            <Outlet />
        </section>

        <Footer />
    </div>
  )
}

export default RootLayout