import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../pages/shop/CartModal';
import avatarImg from "../assets/avatar.png"

const Navbar = () => {
    const products = useSelector((state) => state.cart.products);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartToggle = () =>{
        setIsCartOpen(!isCartOpen)
    }

    // Show user if logged in

    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)
//    console.log(user);

// dropdown menu
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handDropDownToggle = () =>{
        setIsDropDownOpen(!isDropDownOpen)
    }

    // admin dropdown menus
  
    const adminDropDownMenu = [
        {label: "Dashboard", path: "/dashboard/admin"},
        {label: "Manage Items", path: "/dashboard/manage-products"},
        {label: "All Orders", path: "/dashboard/manage-orders"},
        {label: "Add New Post", path: "/dashboard/add-new-post"},
        
    ]

    const userDropDownMenu = [
        {label: "Dashboard", path: "/dashboard"},
        {label: "Profile", path: "/dashboard/profile"},
        {label: "Payments", path: "/dashboard/payments"},
        {label: "Orders", path: "/dashboard/orders"},
        
    ]
    const dropdownMenu = user?.role === 'admin' ? [...adminDropDownMenu] : [...userDropDownMenu]
    const handleLogout = () =>{

    }
  return (
  <header className='fixed-nav-bar w-nav'>
    <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center '>
        <ul className='nav__links'>
            <li className='link'><Link to="/">Home</Link></li>
            <li className='link'><Link to="/shop">Shop</Link></li>
            <li className='link'><Link to="/pages">Pages</Link></li>
            <li className='link'><Link to="/">Contact</Link></li>
        </ul>
        {/* logo */}
        <div className='nav__logo'>
            <Link to="/">E-Commerce</Link>
        </div>

        {/* nav-icon */}
        <div className='nav__icons relative'>
            <span>
                <Link to="/search">
                <i className="ri-search-line"></i>
                </Link>
            </span>

            <span>
                <button onClick={handleCartToggle} className='hover:text-primary'>
                <i className="ri-shopping-bag-line"></i>
                <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                </button>
            </span>

            <span>
                {
                    user && user ? (<>
                    <img
                      onClick={handDropDownToggle}
                      src={user?.profileImage || avatarImg} alt='' className='size-6 rounded-full cursor-pointer'/>
                      {
                        isDropDownOpen && (
                            <div className='absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                                <ul className='font-medium space-y-4 p-2'>
                                    {dropdownMenu.map((menu, index) =>(
                                        <li key={index}>
                                            <Link onClick={() => setIsDropDownOpen(false)}
                                            className='dropdown-items' to={menu.path}
                                            >{menu.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li><Link onClick={handleLogout} className='dropdown-items'>Logout</Link></li>
                                </ul>
                            </div>
                        )
                      }  
                    
                    </>) : ( <Link to="/login">
                        <i className="ri-user-line"></i>
                        </Link>)
                }
               
            </span>

        </div>
    </nav>
    {
        isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle}></CartModal>
    }
  </header>
  )
}

export default Navbar
