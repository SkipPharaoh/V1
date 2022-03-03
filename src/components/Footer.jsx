// IMPORT //
import '../styles/Footer.css'
import Logo from '../assets/logo.png'


function Footer(){
    return(
        <div className="Footer">
            {/* Testing Footer */}

            <footer className="flex flex-col items-center justify-evenly px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">

                {/* Brand Logo */}
                {/* <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a> */}
                <a className="font-semibold text-xl tracking-tight" href="/">
                    <img src={Logo} alt="Logo" className='w-11 h-11 rounded-full border border-white hover:border-blue-100 shadow-2xl shadow-amber-50'/>
                </a>


                {/* Copyright/ Designed By Text */}
                <p className="py-2 text-gray-800 dark:text-white sm:py-0">Built & Designed by Caniggia Thompson</p>
                <p className="py-2 text-gray-800 dark:text-white sm:py-0">© All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer