// IMPORTS //
import About from "./About"
import Header from "./Header"
import Projects from "./Projects"
import SideFooter from "./SideFooter"
import Skills from "./Skills"

function Home(){
    return(
        <div className="Home">
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
        </div>
    )
}

export default Home