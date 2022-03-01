// IMPORTS //
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Projects from "./Projects"
import SideFooter from "./SideFooter"
import Skills from "./Skills"

function Home(){
    // if  !info is not loaded yet, then return loading
    // else info
    return(
        <div className="Home bg-gradient-to-b from-teal-400 via-cyan-300 to-blue-50 h-full">
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
        </div>
    )
}

export default Home