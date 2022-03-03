// // IMPORTS //
// import {useState, useEffect} from 'react'
// import useLocalStorage from 'use-local-storage'


// function UserDarkMode(){


//     const [isEnabled, setIsEnabled] = useLocalStorage('dark-mode', undefined)

//     const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled

//     useEffect(() => {
//         if (window === undefined) {return}

//         const root = window.document.documentElement

//         root.classList.remove(enabled ? 'light' : 'dark')
//         root.classList.add(enabled ? 'dark' : 'light')
//     }, [enabled])

//     return [enabled, setIsEnabled]
// }

// export default UserDarkMode