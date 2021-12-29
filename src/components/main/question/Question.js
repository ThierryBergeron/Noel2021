import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    gap: .7rem;
`

const Text = styled.div`


`

const Button = styled.button`
    border: none;
    background-color: rgba(0,0,0);
    color: white;
    padding: .5rem;
    border-radius: .3rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: ease .3s;
    &:hover{
        background-color: rgba(0,0,0, 0.25);
        transition: ease .3s;
    }
`

const TextBox = styled.input`
    height: 1.8rem;
    font-size: 1.2rem;
`

export default function Question({ question, placeholder, buttonValue = 'Entrez', questionText, callback, answer = '' }) {
    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const handleClick = (e) => {
        console.log(value)
        console.log(answer)

        if (value.toLowerCase() === answer.toLowerCase()) {
            callback();
        }
        else {

            // Todo ameliorer ce fonctionnement
            alert('Mauvaise réponse')
        }

    }

    return (
        <Box>
            <Text>
                {questionText}
            </Text>

            <TextBox type="text" onChange={handleChange} />
            <Button onClick={handleClick}>
                {buttonValue}
            </Button>
        </Box>
    )
}
