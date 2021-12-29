import React, { useState } from "react";
import Question from "../question/Question";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Dots from "../question/Dots";

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Level = [
    { question: "Les indices de votre premier objectif se trouvent dans le bureau, regardez sous les meubles pour les messages orange.", answer: "Decembre" },
    { question: "Les indices du second objectif se trouve au plafond d'une chambre dont vous n'avez pas accès.", answer: "Sapin" },
    { question: "Pour passer à la prochain étape, vous devez trouver sept chiffre, regardez pour les indices bleu dans les différentes pièces du sous-sol. Certain d'entre eux nécessite des calculs mathématique.", answer: [40, 12, 28, 15, 8, 3, 17] },
    { question: "Bravo vous avez obtenu un premier cadeau. Si jamais vous avez passer trop vite, la combinaison est 6731. Le prochain défi s'adresse pour Antoine. Avec ton nouvel outil, utilise se dernier pour faire tomber un pot contenant les indices. Ce pot se situe sous le salon au plafond du sous-sol.", answer: "Antoine" },
    { question: "Pour passer à l'étape final, utiliser vos nouveaux outils et faites tomber les derniers pots prêt du panneau électrique.", answer: "William" },
    { question: "Quelle est le nouvel an", answer: "2022" },
];

export default function Answer({ number, setNumber }) {
    console.log(number);
    const [remaining, setRemaining] = useState(Level[2].answer);
    const [answered, setAnswered] = useState([]);
    const navigate = useNavigate();

    const callback = (value) => {
        if (isArray) {
            var remains = remaining.filter((values) => values !== value);
            setRemaining(remains);
            answered.push(value);
            setAnswered(answered);
            if (remains.length === 0) {
                setTimeout(() => {
                    navigate("/success");
                    setNumber(number + 1);
                }, 1500);
            }
            return;
        }

        setNumber(number + 1);
        navigate("/success");
    };

    const answer = Level[number].answer;
    const question = Level[number].question;
    const isArray = Array.isArray(answer);

    return (
        <Box>
            {isArray ? <Dots array={remaining} answered={answered} /> : null}
            <Question question={question} answer={answer} callback={callback} />
        </Box>
    );
}
