import React from "react";
import styled from "styled-components";
import Question from "../question/Question";
import { useNavigate } from "react-router";

const Box = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export default function Landing() {
    const navigate = useNavigate();

    const callback = () => {
        navigate("/answer");
    };
    return (
        <Box>
            Bonjour, entrez le mot de passe et cliquer sur Départ pour commencez
            votre mission!
            <Question callback={callback} answer="1234" buttonValue="Départ" />
        </Box>
    );
}
