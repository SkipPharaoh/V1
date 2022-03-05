// IMPORTS //
import headshot from '../assets/headshot.PNG'

function Links(){
    return(
        <div className="Links bg-gradient-to-b from-white via-blue-200 to-blue-300 h-screen">

            {/* Profile photo that's centered */}
            <div className="Image-Container flex justify-center content-center h-52">
                <img className='Profile-Image' src={headshot} alt="Handsome Dev Here"/>
            </div>

            {/* Name */}
            <div className="name text-rose-900 font-serif text-2xl">
                <h3>Caniggia Thompson</h3>
            </div>

            {/* Links */}
            <div className="Links-Container">

                {/* LinkedIn */}
                <div>
                    <a className='text-2xl' href="https://www.linkedin.com/in/skippharaoh/">
                        <button className="bg-blue-700 text-white border-white border-2 py-4 px-14 w-full hover:bg-indigo hover:text-blue-100 hover:border-purple-900 transition-all duration-500"
                        >
                            LinkedIn
                        </button>
                    </a>
                </div>

                {/* Twitter */}
                <div>
                    <a className='text-2xl' href="https://twitter.com/skip_pharaoh">
                        <button className='bg-blue-700 text-white border-white border-2 py-4 px-14 w-full hover:bg-indigo hover:text-blue-100 hover:border-purple-900 transition-all duration-500'
                        >
                            Twitter
                        </button>
                    </a>
                </div>

                {/* GitHub */}
                <div>
                    <a className='text-2xl' href="https://github.com/SkipPharaoh">
                        <button className='bg-blue-700 text-white border-white border-2 py-4 px-14 w-full hover:bg-indigo hover:text-blue-100 hover:border-purple-900 transition-all duration-500'
                        >
                            GitHub
                        </button>
                    </a>
                </div>

                {/* Personal Website */}
                <div>
                    <a className='text-2xl' href="/">
                        <button className='bg-blue-700 text-white border-white border-2 py-4 px-14 w-full hover:bg-indigo hover:text-blue-100 hover:border-purple-900 transition-all duration-500'
                        >
                            Portfolio Site
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Links