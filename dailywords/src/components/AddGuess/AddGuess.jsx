import { useState } from 'react'
import './AddGuess.css'

const AddGuess = () => {
    const [guess, setGuess] = useState(3)

    return (
        <div className="guessWrap">
            <form className="formWrap">
                <input type="text" placeholder="What's your guess?" name="guessBox"/>
                <button type="submit" onClick={() => setGuess(guess - 1)}>Guess</button>
            </form>
            <h4>{guess} Guesses Left</h4>
        </div>
    )
}

export default AddGuess
