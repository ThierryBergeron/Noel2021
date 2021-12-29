import React, { useState, useEffect } from 'react'
import Question from '../question/Question'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export default function Answer({ }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const callback = () => {

    }

    const updateQuestion = async () => {
        fetch()
    }

    return (
        <Box>
            <Question question={question} answer={answer} />
        </Box>
    )
}
