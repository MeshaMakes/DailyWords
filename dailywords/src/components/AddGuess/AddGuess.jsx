import { useRef, useState } from 'react'
import './AddGuess.css'

const AddGuess = () => {
    const [guess, setGuess] = useState(5)
    const inputVal = useRef()

    const guessesLeft = () => {
        if(guess > 0) {
            const guessNum = guess - 1
            setGuess(guessNum)
            clearField()
        }
    }

    const clearField = () => {
        inputVal.current.value = ""
    }

    return (
        <div className="guessWrap">
            <form className="formWrap" onSubmit={(e) => e.preventDefault()}>
                <input ref={inputVal} autoComplete="off" type="text" placeholder="What's your guess?" name="guessBox"/>
                <button type="submit" onClick={() => guessesLeft()}>Guess</button>
            </form>
            <h4>{guess} Guesses Left</h4>
        </div>
    )
}

export default AddGuess
