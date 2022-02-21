

function Header(){
    return(
        <div className="Header">
            <nav className="Header">
                <p>Logo</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <a className="resume-button" href="/resume.pdf" target='_blank' rel="noopener noreferrer">
                    <button>Resume</button>
                </a>
            </nav>
        </div>
    )
}

export default Header