import React from 'react'
import { Link } from 'react-router-dom'

export default function Sider() {
    return (
        <>
            <header style={{ minHeight: "100vh", width: 200 }}>
                <nav>
                    <div class="position-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link to="/dashboard" class="nav-link active">
                                    Dashboard
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/users" class="nav-link">
                                    Users
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/contacts" class="nav-link">
                                    Contacts
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" class="nav-link">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>
    )
}
