import React from 'react'
import { Outlet, Link } from 'react-router-dom'
function Layaut() {
    return (
        <div>
            <nav className='navbar-nav'>
                <ul>
                    <li className='nav-item active'>
                        <Link className='nav-link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className='nav-link' to="/clientes">
                            Clientes
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className='nav-link' to="/productos">
                            Productos
                        </Link>
                    </li>
                </ul>
            </nav>
           

            <Outlet></Outlet>


        </div>
    )
}

export default Layaut