import { useState, useEffect, useContext } from 'react'
import ApiContext from '../../Utils/apiService'
import './WordGuess.css'

const wordUrl = "https://random-word-api.herokuapp.com/word?number=1"

const WordGuess = () => {
    const service = useContext(ApiContext)

    const getDailyWord = async () => {
        const res = await service.generateWord()
    }
    
    useEffect(() => {
        getDailyWord()
    }, [])

    var wordLength = service.dailyWord.toString().split('')
    console.log(service.dailyWord.toString());

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