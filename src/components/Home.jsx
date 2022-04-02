// IMPORTS //
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Projects from "./Projects"
import SideFooter from "./SideFooter"
import Skills from "./Skills"
import {useState, useEffect} from 'react'



// const colorCombo1 = ''


function Home(){
    // if !info is not loaded yet, then return loading
    // else info


    // States //
    const [topButton, setTopButton] = useState(false)

    // USE EFFECT //
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setTopButton(true)
        }
        else {
            setTopButton(false)
        }
        })
    }, [])

    // Function To Scroll To Top //
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        // for smoothly scrolling back to top
        behavior: 'smooth'
        })
    }


    return(
        <div className="Home bg-gradient-to-b from-white via-blue-200 to-neutral-900 dark:bg-gradient-to-b h-full">
        {/* Nav Bar Component */}
            <Header />

            {/* About Component */}
            <About />

            {/* Skills Compoenent */}
            <Skills />

            {/* Projects Component */}
            <Projects />

            {/* Footer along the bottom Side */}
            <SideFooter />

            {/* Bottom Footer */}
            <Footer />

            {/*  Button To Click To Scroll To Top */}
            {topButton && (
                <button onClick={scrollToTop} 
                className="fixed bottom-5 right-5 hover:bg-raspberry text-neutral-900 rounded-full bg-indigo hover:text-white cursor-pointer transition duration-500"
                >

                    {/* Arrow Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default Home