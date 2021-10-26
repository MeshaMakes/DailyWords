import { useState, useEffect } from 'react'
import './Definition.css'

const Definition = (props) => {
    const [wordDef, setWordDef] = useState('')

    const getWordDef = async () => {
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/thus")
        const result = await response.json()
        const wordDef = await result[0]["meanings"][0]["definitions"][0]["definition"]
        setWordDef(wordDef)
    }

    useEffect(() => {
        getWordDef()
    }, [])

    return (
        <blockquote className='definition'>
            {wordDef.toString()}
        </blockquote>
    )
}

export default Definition