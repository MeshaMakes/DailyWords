import './WordGuess.css'

var word = "Tamesha"
var wordLength = word.split('')

const WordGuess = () => {
    return (
        <div className="spaces">
            {
                wordLength.map(function(val,) {
                    return <div className="wordSpace"></div>
                })
            }
        </div>
    )
}

export default WordGuess