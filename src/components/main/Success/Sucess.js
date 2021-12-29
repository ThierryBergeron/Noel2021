import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.2rem;
`;

const Text = styled.div`
    max-width: 30rem;
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
    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        transition: ease 0.3s;
    }
`;

export default function Sucess({
    message = "Bravo! Vous pouvez passer à la prochaine étape.",
    number,
}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/answer");
    };

    if (number === 3) {
        message =
            "Pour la prochaine étape vous aurez besoin d'un nouvel outils, allez voir sous le sapin, un cadeau se déverrouillera avec la combinaison 6731.";
    }

    if (number === 4) {
        message =
            "Pour la prochaine étape vous aurez besoin de nouvels outils, allez voir sous le sapin, deux cadeaux se déverrouilleront avec la combinaison 8347.";
    }

    if (number === 6) {
        message =
            "Bravo vous avez complétez tous les étapes, il reste le cadeau final, la combinaison est 40 24 16, rotation horaire, anti-horaire, horaire";
    }

    return (
        <Box>
            <Text>{message}</Text>

            <Button onClick={handleClick}>Suivant</Button>
        </Box>
    );
}
