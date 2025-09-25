

import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

