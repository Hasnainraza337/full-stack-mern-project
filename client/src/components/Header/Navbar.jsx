import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Navbar() {
    const { isLoggedIn } = useAuthContext();
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-4">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Hasnain Raza</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" >Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link" >Contact</Link>
                                </li>
                                {isLoggedIn ? (
                                    <li className="nav-item">
                                        <Link to="/auth/logout" className="nav-link" >Logout</Link>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link to="/auth/login" className="nav-link" >Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/auth/register" className="nav-link" >Register</Link>
                                        </li>
                                    </>
                                )}

                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
