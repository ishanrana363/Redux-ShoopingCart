import { FaCartArrowDown } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const cartData = useSelector((state) => state.cartProduct)
    const totalItems = cartData.reduce((acc, curr) => acc + curr.quantity, 0)
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
                                        <div className="flex items-center" >
                                            <div className="-mt-4  " >
                                                {
                                                    totalItems
                                                }
                                            </div>
                                            <span><FaCartArrowDown />
                                            </span>
                                        </div>

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
