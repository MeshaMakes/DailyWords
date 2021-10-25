// import { useState } from 'react';

// async function getDailyWord() {
//     const [dailyWord, setDailyWord] = useState('');

//     const url = "https://random-word-api.herokuapp.com/word?number=1";
//     return fetch(url).then(function(response) {
//         if(response.ok) {
//             return response.json();
//         } else {
//             console.log("Error");
//         }
//     }).then(function(data) {
//         data.text();
//     })
// }

import React, {useState, useEffect} from 'react';

const Values = () => {
    const [dailyWord, setDailyWord] = useState('');
    const [wordDef, setwordDef] = useState('');
    
    return { 
        dailyWord,
        setDailyWord,
        wordDef,
        setwordDef,
    }
}

const ScrapeClass = (props) => {
    const values = Values();

    const scrapeWord = () => {
        getWord().then((data) => {
            values.setDailyWord(data)
        })
    }

    // const scrapeDef = (word=values.dailyWord) => {
    //     getDef().then((data) => {
    //         values.setwordDef(data)
    //     })
    // }

    const state = {
        values: values,
        scrapeWord: scrapeWord,
    }
}

async function getWord() {
    const url = "https://random-word-api.herokuapp.com/word?number=1"
    return fetch(url).then(function (response) {
        if(response.ok) {
            return response.text();
        } else {
            console.log("Unable to fetch");
        }
    }).then(function (data) {
        return data;
    })
}

// async function getDef(props) {
//     const url = "https://wordsapiv1.p.mashape.com/words/" + props.word + "/definitions"
//     return fetch(url).then(function (response) {
//         if(response.ok) {
//             return response.text();
//         } else {
//             console.log("Unable to fetch");
//         }
//     }).then(function (data) {
//         return data["definitions"][0]["definition"];
//     })
// }