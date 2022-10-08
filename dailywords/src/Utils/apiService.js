import { useState, createContext } from "react"

const ApiContext = createContext()
export default ApiContext

const ContextState = () => {
    const [dailyWord, setDailyWord] = useState('')
    const [wordDef, setWordDef] = useState('')
    const [wordHistory, setWordHistory] = useState('')
    const [defUrl, setDefUrl] = useState('')

    const generateWord = async () => {
        const wordUrl = 'https://random-word-api.herokuapp.com/word?number=1'
        const response = await fetch(wordUrl)
        const data = await response.json()
        getUrl()
        setDailyWord(data)
    }

    const getUrl = async () => {
        setDefUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${dailyWord}`)
        return `https://api.dictionaryapi.dev/api/v2/entries/en/${dailyWord}`
    }

    const generateWordDefinition = async () => {
        const word = await getUrl()
        console.log(word);
        const response = await fetch(word)
        const result = await response.json()
        console.log('RES', result)
        const data = await result[0]["meanings"][0]["definitions"][0]["definition"]
        console.log('DEF', data)
        setWordDef(data)
    }

    return {
        generateWord,
        generateWordDefinition,
        wordDef,
        dailyWord,
    }
}

const ApiContextProvider = (props) => {
    const state = ContextState()

    return (
        <ApiContext.Provider value={state}>
            {props.children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiContextProvider }