import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width};
    gap: 0.7rem;
    font-size: 1.3rem;
`;

const Text = styled.div`
    max-width: 35rem;
`;

const Button = styled.button`
    border: none;
    background-color: rgba(0, 0, 0);
    color: white;
    padding: 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: ease 0.3s;
    width: 15rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        transition: ease 0.3s;
    }
`;

const TextBox = styled.input`
    height: 1.8rem;
    font-size: 1.2rem;
`;

export default function Question({
    question,
    placeholder,
    buttonValue = "Entrez",
    questionText,
    callback,
    answer = "",
}) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.currentTarget.value);
    };
    const handleError = () => {
        alert("Mauvaise réponse");
    };

    const handleClick = (e) => {
        if (Array.isArray(answer)) {
            var numberValue = Number(value);

            if (answer.includes(numberValue)) {
                callback(numberValue);
                setValue("");
            } else handleError();
            return;
        }

        let modifiedValue = value.toLocaleLowerCase().replace("é", "e");
        if (modifiedValue === answer.toLowerCase()) callback();
        else handleError();
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") handleClick();
    };

    console.log(question, answer);

    return (
        <Box>
            <Text>{question}</Text>
            <Box width='15rem'>
                <TextBox
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                    value={value}
                />
                <Button onClick={handleClick}>{buttonValue}</Button>
            </Box>
        </Box>
    );
}
