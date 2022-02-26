// IMPORT //
import '../styles/Skills.css'

function Skills(){
    return(
        <div className="Skills" id="skills">

            {/* Skills Header/Title */}
            <h3>
                <u>Skill Set</u>
            </h3>

            {/* Skills Container */}
            <div className="SkillSetContainer">

                {/* Languages Container */}
                <div className="Languages col">
                    <div className="card">

                        {/* Languages Header/Title */}
                        <div className="card-header">Languages</div>
                        <div className="card-body">

                            {/* LOGOS */}
                            <ul className='list'>
                                <li>HTML</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-plain-wordmark.svg" alt="" className="skill" /></li>
                                <li>CSS</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-plain-wordmark.svg" alt="" className="skill" /></li>
                                <li>JavaScript</li>
                                <li><img className='skill' src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg" alt="" /></li>
                                <li>Python</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg" alt="" className="skill" /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Libraries Container */}
                <div className="Libraries col">
                    <div className="card">

                        {/* Libraries/Frameworks Header/Title */}
                        <div className="card-header">Libraries & Frameworks</div>
                        <div className="card-body">

                            {/* LOGOS */}
                            <ul className='list'>
                                <li>Bootstrap</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bootstrap/bootstrap-original.svg" alt="" className="skill" /></li>
                                <li>React</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg" alt="" className="skill" /></li>
                                <li>Express</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg" alt="" className="skill" /></li>
                                <li>NodeJS</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg" alt="" className="skill" /></li>
                                <li>Django</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/django/django-plain.svg" alt="" className="skill" /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Databases Container */}
                <div className="Databases col">
                    <div className="card">

                        {/* Databases Header/Title */}
                        <div className="card-header">Databases</div>
                        <div className="card-body">

                            {/* LOGOS */}
                            <ul className='list'>
                                <li>MongoDB</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" alt="" className="skill" /></li>
                                <li>PostgreSQL</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/postgresql/postgresql-original.svg" alt="" className="skill" /></li>
                                <li>T-SQL</li>
                                <li><img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-1.png" alt="" className="skill" /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms Container */}
                <div className="Tools col">
                    <div className="card">

                        {/* Tools/Platforms Header/Title */}
                        <div className="card-header">Tools & Platforms</div>
                        <div className="card-body">

                            {/* LOGOS */}
                            <ul className='list'>
                                <li>Git</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg" alt="" className="skill" /></li>
                                <li>Heroku</li>
                                <li><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/heroku/heroku-original.svg" alt="" className="skill" /></li>
                                <li>Netlify</li>
                                <li><img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" alt="" className="skill" /></li>
                                <li>Surge</li>
                                <li><img src="https://miro.medium.com/max/1200/1*0sps7zugC50qAYlM6-8atA.png" alt="" className="skill" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills