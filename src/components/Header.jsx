import '../styles/Header.css'
import Logo from '../assets/logo.png'
import {useState} from 'react'

function Header(){
    // States //
    const [isOpen, setIsOpen] = useState(false)

    // Toggle Function For Collapsed Header //
    const toggleMenu = () => {
        setIsOpen(!isOpen)
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

