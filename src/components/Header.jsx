import '../styles/Header.css'

function Header(){
    return(
        <div className="Header">
            {/* <nav className="Header">
                <p>Logo</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <a className="resume-button" href="/resume.pdf" target='_blank' rel="noopener noreferrer">
                    <button>Resume</button>
                </a>
            </nav> */}
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#about">About</a>
                        <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                        <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                        <a className="nav-link resume-button" href='/resume.pdf' target='_blank' rel="noopener noreferrer"><button>Resume</button></a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header