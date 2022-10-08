import { useState, useEffect, useContext } from 'react'
import ApiContext from '../../Utils/apiService'
import './Definition.css'

const Definition = (props) => {
    const service = useContext(ApiContext)
    const getWordDef = async () => {
        const res = await service.generateWordDefinition()
    }

    useEffect(() => {
        getWordDef()
    }, [service.dailyWord])

    return (
        <blockquote className='definition'>
            {service.wordDef.toString()}
        </blockquote>
    )
}

export default Definition