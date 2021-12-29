import React from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
`;

const Dot = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${(props) => props.color};
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Dots({ array, answered }) {
    const dots = Array(7).fill(0);
    console.log(dots);
    const length = array.length - 1;
    console.log(answered);

    return (
        <Box>
            {dots.map((_, index) => {
                let value = "";
                let color = "red";
                if (index > length) {
                    color = "green";
                    value =
                        answered[answered.length - 1 - (index - length - 1)];
                }

                return (
                    <Dot color={color} key={index}>
                        {value}
                    </Dot>
                );
            })}
        </Box>
    );
}
