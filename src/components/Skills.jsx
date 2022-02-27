// IMPORT //
import '../styles/Skills.css'

function Skills(){
    return(
        <div className="Skills" id="skills">

            {/* Skills Header/Title */}
            <h3 className='skillHeader text-3xl font-bold underline'>
                Skill Set
            </h3>

            {/* Skills Container */}
            <div className="SkillSetContainer">

                {/* Languages Container */}
                <div className="Languages max-w-sm rounded overflow-hidden shadow-2xl border-4 ">
                    <div className="card">

                        {/* Languages Header/Title */}
                        <div className="card-header font-bold text-xl mb-2">Languages</div>

                        {/* LOGOS */}
                        <div className="card-body" id='circle_square'>

                            {/* HTML */}
                            <div className="circle">
                                {/* <p>HTML</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-plain-wordmark.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* CSS */}
                            <div className="circle">
                                {/* <p>CSS</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-plain-wordmark.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* JAVASCRIPT */}
                            <div className="circle">
                                {/* <p>JavaScript</p> */}
                                <img className='skill animate-bounce' src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg" alt="" />
                            </div>

                            {/* PYTHON */}
                            <div className="circle">
                                {/* <p>Python</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg" alt="" className="skill animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Libraries Container */}
                <div className="Libraries max-w-sm rounded overflow-hidden shadow-2xl border-4">
                    <div className="card">

                        {/* Libraries/Frameworks Header/Title */}
                        <div className="card-header font-bold text-xl mb-2">Libraries & Frameworks</div>
                        
                        {/* LOGOS */}
                        <div className="card-body">

                            {/* BOOTSTRAP */}
                            <div className="circle">
                                {/* <p>Bootstrap</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bootstrap/bootstrap-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* REACT */}
                            <div className="circle">
                                {/* <p>React</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* EXPRESS */}
                            <div className="circle">
                                {/* <p>Express</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* NODEJS */}
                            <div className="circle">
                                {/* <p>NodeJS</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* DJANGO */}
                            <div className="circle">
                                {/* <p>Django</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/django/django-plain.svg" alt="" className="skill animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Databases Container */}
                <div className="Databases max-w-sm rounded overflow-hidden shadow-2xl border-4">
                    <div className="card">

                        {/* Databases Header/Title */}
                        <div className="card-header font-bold text-xl mb-2">Databases</div>

                        {/* LOGOS */}
                        <div className="card-body">

                            {/* MONGODB */}
                            <div className="circle">
                                {/* <p>MongoDB</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* POSTGRESQL */}
                            <div className="circle">
                                {/* <p>PostgreSQL</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/postgresql/postgresql-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* T-SQL */}
                            <div className="circle">
                                {/* <p>T-SQL</p> */}
                                <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-1.png" alt="" className="skill animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms Container */}
                <div className="Tools max-w-sm rounded overflow-hidden shadow-2xl border-4">
                    <div className="card">

                        {/* Tools/Platforms Header/Title */}
                        <div className="card-header font-bold text-xl mb-2">Tools & Platforms</div>

                        {/* LOGOS */}
                        <div className="card-body">

                            {/* GIT */}
                            <div className="circle">
                                {/* <p>Git</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* HEROKU */}
                            <div className="circle">
                                {/* <p>Heroku</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/heroku/heroku-original.svg" alt="" className="skill animate-bounce" />
                            </div>

                            {/* NETLIFY */}
                            <div className="circle">
                                {/* <p>Netlify</p> */}
                                <img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" alt="" className="skill animate-bounce" />
                            </div>

                            {/* SURGE */}
                            <div className="circle">
                                {/* <p>Surge</p> */}
                                <img src="https://miro.medium.com/max/1200/1*0sps7zugC50qAYlM6-8atA.png" alt="" className="skill animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills