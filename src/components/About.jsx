// IMPORT //
import '../styles/About.css'
import headshot from '../assets/headshot.PNG'

function About(){
    return(
        <div className="About">

            <div
                className="my-32 p-14 flex flex-col-reverse items-center lg:flex-row bg-white"
            >
                <div className="w-full lg:w-1/2 lg:pr-5">
                    <div
                        className="text-center font-semibold lg:text-left"
                    >
                    </div>
                    <h3 className='mt-5 mb-7 mb-4 text-3xl font-bold tracking-tight sm:text-center sm:text-5xl lg:text-left'>Hi, my name is</h3>
                    <h1 className='mt-5 mb-7 mb-4 text-5xl font-extrabold tracking-tight sm:text-center sm:text-5xl lg:text-left'>Caniggia Thompson.</h1>
                    <h2
                        className="mt-5 mb-7 mb-4 text-3xl font-bold tracking-tight sm:text-center sm:text-5xl lg:text-left"
                    >
                        I solve problems & build things on the internet.
                    </h2>
                    <p
                        className="mt-5 mb-7 text-center text-gray-500 lg:text-left"
                    >
                        A full Stack Developer with a passion and tenacious for problem-solving. I would love to be apart of an exceptional team who creates exceptional digital experiences. I have a huge interest in working within the FinTech, Investment, or Technology industry.
                    </p>
                </div>
                <img
                    className="mb-10 w-full lg:mb-0 lg:w-1/2 lg:pl-5"
                    src={headshot}
                    alt="Handsome Fellow"
                    id="headshot"
                />
            </div>

            {/* About Me Container */}
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800" id='about'>
                <div className="mt-2">
                    {/* About Me Header */}
                    <h1 className="text-3xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">About Me</h1>

                    {/* About Me Section */}
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Hello, most of my friends call me Skip and I'm a recent graduate of General Assembly's full-time software engineering immersive Bootcamp. I have a passion and tenacity for problem-solving, which feeds my creativity.</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">My interest for software developing start when I came across Google's courses available on Coursera. That led me to take a course available on Coursera by MIT called 'Python For Everyone.' Fast-forward to taday, and I've had the privilege of building and exploring some of the many tools available to software developers.</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">I am curious and motivated to learn as much as I can to strengthen my problem-solving skill, which will result in becoming a better developer.</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Checkout my skills and projects below!</p>
                </div>
            </div>

        </div>
    )
}

export default About