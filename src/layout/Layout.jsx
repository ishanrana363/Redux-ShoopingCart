import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout
