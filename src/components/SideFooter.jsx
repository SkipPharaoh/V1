// IMPORT //
import '../styles/SideFooter.css'

function SideFooter(){
    return(
        <div className="Contacts">
            {/* GITHUB */}
            <a className='img' href="https://github.com/SkipPharaoh">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-github-community-for-software-building-and-testing-online-logo-green-tal-revivo.png"/>
            </a>

            {/* LINKEDIN */}
            <a className='img' href="https://www.linkedin.com/in/skippharaoh/">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-linkedin-in-logo-used-for-professional-networking-logo-green-tal-revivo.png"/>
            </a>

            {/* TWITTER */}
            <a className='img' href="https://twitter.com/skip_pharaoh">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-twitter-bird-logotype-a-social-networking-service-on-which-users-post-messages-logo-green-tal-revivo.png"/>
            </a>

            {/* EMAIL */}
            <a className='img' href="mailto:caniggiathompson@gmail.com">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-email-address-service-email-green-tal-revivo.png"/>
            </a>
        </div>
    )
}

export default SideFooter