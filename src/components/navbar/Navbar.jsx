import { FaCartArrowDown } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-blue-900 text-white " >
            <div className="w-11/12 mx-auto py-3  " >
                <div className="flex justify-between items-center " >
                    {/* logo */}
                    <div>
                        <Link to={"/"}>
                            <h1 className="font-bold text-2xl " >ShoopingCart</h1>
                        </Link>
                    </div>
                    {/* nav item */}
                    <div>
                        <nav>
                            <ul className="flex justify-center items-center space-x-6 " >
                                <li>
                                    <NavLink to={"/"} >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/product"} >Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/cart"} >
                                        <span><FaCartArrowDown />
                                        </span>

                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
