import '../styles/Header.css'
import Logo from '../assets/logo.png'
import {useState} from 'react'

function Header(){
    // States //
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Toggle Function For Collapsed Header //
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // Dark Mode Function //
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    // Variables //
    const open = isOpen ? 'block' : 'hidden'

    return(
        <div className="Header">
            
            {/* Nav Bar */}
            <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">

                {/* LOGO */}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a className="font-semibold text-xl tracking-tight" href="/">
                        <img src={Logo} alt="Logo" className='w-11 h-11 rounded-full border border-white shadow-2xl shadow-amber-50'/>
                    </a>
                    
                </div>

                {/* Dark Mode Toggle Container */}
                <div className="dark">

                    {/* Light/Dark Mode Toggle Icon */}
                    <button onClick={toggleDarkMode}>
                        {darkMode ? 

                            // Dark Mode Icon //
                            <svg className="w-8 h-8 md:w-10 md:h-10 fill-black stroke-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                            :

                            // Light Mode Toggle
                            <svg className="w-8 h-8 md:w-10 md:h-10 fill-black stroke-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        }
                    </button>
                </div>

                {/* Collapse Icon */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg 
                            className="fill-current h-6 w-6" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open}`}>

                    {/* Page Section Button/Links */}  
                    <div className="text-xl lg:flex-grow">

                        {/* About */}
                        <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>

                        {/* Skills */}
                        <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Skills
                        </a>

                        {/* Projects */}
                        <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Projects
                        </a>
                    </div>

                    {/* Resume Button/Link */}
                    <div>
                        <a href="/resume.pdf" target='_blank' rel="noopener noreferrer" className="inline-block px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 shadow-2xl">Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

