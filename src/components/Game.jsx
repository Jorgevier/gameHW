import { useState } from "react"

import Container from "react-bootstrap/Container"

export default function Game() {

    const [ yourCard, cardDrawn] = useState()
    const [ myCard, cardDrawn2] = useState()


    const numbers = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J/11',
        'Q/11',
        'K/12'
    ]

    function randomCard(){
        cardDrawn(numbers[Math.floor(Math.random() * numbers.length)])
        cardDrawn2(numbers[Math.floor(Math.random() * numbers.length)])
    }

   
        
    

    return(
        <Container>
            <h3> draw your card</h3>
            <p>1st card {yourCard}</p>
            <p>2nd card {myCard}</p>
            <button onClick={randomCard}>Draw my cards</button>
        </Container>
    )
}