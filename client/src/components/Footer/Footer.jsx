import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-primary py-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='mb-0 text-white text-center'>&copy; copyright {year}.Developrd by Hasnain Raza</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
