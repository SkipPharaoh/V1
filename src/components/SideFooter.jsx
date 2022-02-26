// IMPORT //
import '../styles/SideFooter.css'

function SideFooter(){
    return(
        <div className="Contacts">
            {/* GITHUB */}
            <a href="https://github.com/SkipPharaoh" target='_blank' rel="noreferrer">
                <img className='img' alt='' src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original.svg"/>
            </a>

            {/* LINKEDIN */}
            <a href="https://www.linkedin.com/in/skippharaoh/" target='_blank' rel="noreferrer">
                <img className='img' alt='' src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/linkedin/linkedin-plain.svg"/>
            </a>

            {/* TWITTER */}
            <a href="https://twitter.com/skip_pharaoh" target='_blank' rel="noreferrer">
                <img className='img' alt='' src="https://www.nicepng.com/png/full/8-88155_free-twitter-icon-png-vector-twitter-black-logo.png"/>
            </a>

            {/* EMAIL */}
            <a href="mailto:caniggiathompson@gmail.com">
                <img className='img' alt='' src="https://cdn-icons-png.flaticon.com/512/60/60543.png"/>
            </a>
        </div>
    )
}

export default SideFooter