// IMPORT //
import '../styles/Footer.css'
import Logo from '../assets/logo.png'


function Footer(){
    return(
        <div className="Footer">
            {/* Testing Footer */}

            <footer className="flex flex-col items-center justify-evenly px-6 py-4 bg-white dark:bg-indigo sm:flex-row">

                {/* Brand Logo */}
                <a className="font-semibold text-xl tracking-tight" href="/">
                    <img src={Logo} alt="Logo" className='w-11 h-11 rounded-full border border-white hover:border-blue-100 shadow-2xl shadow-amber-50'/>
                </a>


                {/* Copyright/ Designed By Text */}
                <p className="py-2 text-rose-800 dark:text-white sm:py-0">Built & Designed by Caniggia Thompson</p>
                <p className="py-2 text-rose-800 dark:text-white sm:py-0">&copy; All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer