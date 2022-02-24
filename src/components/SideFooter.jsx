// IMPORT //
import '../styles/SideFooter.css'

function SideFooter(){
    return(
        <div className="Contacts">
            {/* GITHUB */}
            <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-github-community-for-software-building-and-testing-online-logo-green-tal-revivo.png"/>
            {/* LINKEDIN */}
            <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-linkedin-in-logo-used-for-professional-networking-logo-green-tal-revivo.png"/>
            {/* TWITTER */}
            <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-twitter-bird-logotype-a-social-networking-service-on-which-users-post-messages-logo-green-tal-revivo.png"/>
            {/* EMAIL */}
            <a href="mailto:caniggiathompson@gmail.com">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/30/000000/external-email-address-service-email-green-tal-revivo.png"/>
            </a>
            <nav>
                <ul>
                    <li>
                    <div class="home-icon">
                        <div class="roof">
                        <div class="roof-edge"></div>
                        </div>
                        <div class="front"></div>
                    </div>
                    </li>
                    <li>
                    <div class="about-icon">
                        <div class="head">
                        <div class="eyes"></div>
                        <div class="beard"></div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div class="work-icon">
                        <div class="paper"></div>
                        <div class="lines"></div>
                        <div class="lines"></div>
                        <div class="lines"></div>
                    </div>
                    </li>
                    <li>
                    <div class="mail-icon">
                        <div class="mail-base">
                        <div class="mail-top"></div>
                        </div>
                    </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideFooter