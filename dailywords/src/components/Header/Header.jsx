import {React, useRef,} from 'react'
import './Header.css'
import {ReactComponent as Info} from '../../Icons/info.svg'

var listItems = [
    {
        word: "happy",
    },
    {
        word: "unhappy",
    },
    {
        word: "bored",
    },
]

const Header = () => {
    const hamburger = useRef()
    const navBar = useRef()

    const openHamburger = () => {
        if(hamburger) {
            hamburger.current.classList.toggle('active')
            navBar.current.classList.toggle('active')
            navBar.current.style.width = "16rem"
        }
    }

    const closeHamburger = () => {
        if(hamburger) {
            hamburger.current.classList.remove('active')
            navBar.current.classList.remove('active')
            navBar.current.style.width = "0"
        }
    }

    return (
        <div className='header'>
            <div ref={navBar} className="navBar">
                <div className="navHeader">
                    <h1>Dictionary</h1>
                    <button className='closeBtn' onClick={closeHamburger}>&times;</button>
                </div>
                <ul className="navMenu">
                    {listItems.map(function (val, index) {
                        return <li key={index} className="navItem"> {val.word} </li>
                    })}
                </ul>
            </div>
            <div ref={hamburger} onClick={openHamburger} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <h2>"Daily Words"</h2>
            <Info />
        </div>
    )
}

export default Header
