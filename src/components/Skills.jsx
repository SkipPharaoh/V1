// IMPORT //
import '../styles/Skills.css'

function Skills(){

    return(
        <div className="Skills" id="skills">

            {/* Skills Header/Title */}
            <h3 className='skillHeader text-3xl font-bold underline'>
                Skill Set
            </h3>

            {/* Current Tech Stack */}
            <div className="Exploring">
                <h1>My Go To Tech Stack</h1>
                <p>MERN Stack</p>
            </div>

            {/* Current Tech Stack */}
            <div className="Exploring">
                <h1>Languages & Tools I Have Utilized</h1>
            </div>

            {/* Skills Container */}
            <div className="SkillSetContainer">

                {/* Languages Container */}
                <div className="Languages max-w-sm rounded overflow-hidden shadow-2xl border-white dark:border-blue-100 border-4 dark:bg-indigo bg-white dark:text-white text-black">
                    <div className="card">

                        {/* Languages Header/Title */}
                        <div className="card-header font-bold text-xl mb-2">Languages</div>

                        {/* LOGOS */}
                        <div className="card-body" id='circle_square'>

                            {/* HTML */}
                            <div className="circle">
                                {/* <p>HTML</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-plain-wordmark.svg" alt="" className="skill" />
                            </div>

                            {/* CSS */}
                            <div className="circle">
                                {/* <p>CSS</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-plain-wordmark.svg" alt="" className="skill" />
                            </div>

                            {/* JAVASCRIPT */}
                            <div className="circle">
                                {/* <p>JavaScript</p> */}
                                <img className='skill' src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg" alt="" />
                            </div>

                            {/* PYTHON */}
                            <div className="circle">
                                {/* <p>Python</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg" alt="" className="skill" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Libraries Container */}
                <div className="Libraries max-w-sm rounded overflow-hidden shadow-2xl border-white dark:border-blue-100 border-4 dark:bg-indigo bg-white dark:text-white text-black">
                    <div className="card">

                        {/* Libraries/Frameworks Header/Title */}
                        <div className="card-header font-bold text-xl mb-2 dark:text-white text-black">Libraries & Frameworks</div>
                        
                        {/* LOGOS */}
                        <div className="card-body">

                            {/* BOOTSTRAP */}
                            <div className="circle">
                                {/* <p>Bootstrap</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bootstrap/bootstrap-original.svg" alt="" className="skill" />
                            </div>

                            {/* TAILWINDCSS */}
                            <div className="circle">
                                {/* <p>Tailwind CSS</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-plain.svg" alt="" className="skill" />
                            </div>

                            {/* REACT */}
                            <div className="circle">
                                {/* <p>React</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg" alt="" className="skill" />
                            </div>

                            {/* EXPRESS */}
                            <div className="circle">
                                {/* <p>Express</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg" alt="" className="skill" />
                            </div>

                            {/* NODEJS */}
                            <div className="circle">
                                {/* <p>NodeJS</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg" alt="" className="skill" />
                            </div>

                            {/* DJANGO */}
                            <div className="circle">
                                {/* <p>Django</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/django/django-plain.svg" alt="" className="skill" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Databases Container */}
                <div className="Databases max-w-sm rounded overflow-hidden shadow-2xl border-white dark:border-blue-100 border-4 dark:bg-indigo bg-white dark:text-white text-black">
                    <div className="card">

                        {/* Databases Header/Title */}
                        <div className="card-header font-bold text-xl mb-2 dark:text-white text-black">Databases</div>

                        {/* LOGOS */}
                        <div className="card-body">

                            {/* MONGODB */}
                            <div className="circle">
                                {/* <p>MongoDB</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" alt="" className="skill" />
                            </div>

                            {/* POSTGRESQL */}
                            <div className="circle">
                                {/* <p>PostgreSQL</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/postgresql/postgresql-original.svg" alt="" className="skill" />
                            </div>

                            {/* T-SQL */}
                            <div className="circle">
                                {/* <p>T-SQL</p> */}
                                <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-1.png" alt="" className="skill" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools & Platforms Container */}
                <div className="Tools max-w-sm rounded overflow-hidden shadow-2xl border-white dark:border-blue-100 border-4 dark:bg-indigo bg-white dark:text-white text-black">
                    <div className="card">

                        {/* Tools/Platforms Header/Title */}
                        <div className="card-header font-bold text-xl mb-2 dark:text-white text-black">Tools & Platforms</div>

                        {/* LOGOS */}
                        <div className="card-body">

                            {/* GIT */}
                            <div className="circle">
                                {/* <p>Git</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg" alt="" className="skill" />
                            </div>

                            {/* HEROKU */}
                            <div className="circle">
                                {/* <p>Heroku</p> */}
                                <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/heroku/heroku-original.svg" alt="" className="skill" />
                            </div>

                            {/* NETLIFY */}
                            <div className="circle">
                                {/* <p>Netlify</p> */}
                                <img src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" alt="" className="skill" />
                            </div>

                            {/* SURGE */}
                            <div className="circle">
                                {/* <p>Surge</p> */}
                                <img src="https://miro.medium.com/max/1200/1*0sps7zugC50qAYlM6-8atA.png" alt="" className="skill" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills