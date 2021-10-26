import { useState, useEffect } from 'react'
import './WordGuess.css'

const wordUrl = "https://random-word-api.herokuapp.com/word?number=1"

const WordGuess = () => {
    const [dailyWord, setDailyWord] = useState('')

    const getDailyWord = async () => {
        const response = await fetch(wordUrl)
        const dailyWord = await response.json()
        setDailyWord(dailyWord)
    }
    
    

    useEffect(() => {
        getDailyWord()
    }, [])

    var wordLength = dailyWord.toString().split('')
    console.log(dailyWord.toString());

    return (
        <div className="spaces">
            {
                wordLength.map(function(val, index) {
                    return <div key={index} className="wordSpace"></div>
                })
            }
        </div>
    )
}

export default WordGuess