import { useState, useEffect } from 'react';

const url = "https://random-word-api.herokuapp.com/word?number=1";
const [dailyWord, setDailyWord] = useState('');

async function getDailyWord() {

    const response = await fetch(url)
    const dailyWord = await response.json()
    setDailyWord(dailyWord)
}

// import React, {useState, useEffect} from 'react';

// const Values = () => {
//     const [dailyWord, setDailyWord] = useState('');
//     const [wordDef, setwordDef] = useState('');
    
//     return { 
//         dailyWord,
//         setDailyWord,
//         wordDef,
//         setwordDef,
//     }
// }

// const ScrapeClass = (props) => {
//     const values = Values();

//     const scrapeWord = () => {
//         getWord().then((data) => {
//             values.setDailyWord(data)
//         })
//     }

//     // const scrapeDef = (word=values.dailyWord) => {
//     //     getDef().then((data) => {
//     //         values.setwordDef(data)
//     //     })
//     // }

//     const state = {
//         values: values,
//         scrapeWord: scrapeWord,
//     }
// }

// async function getWord() {
//     const url = "https://random-word-api.herokuapp.com/word?number=1"
//     return fetch(url).then(function (response) {
//         if(response.ok) {
//             return response.text();
//         } else {
//             console.log("Unable to fetch");
//         }
//     }).then(function (data) {
//         return data;
//     })
// }
