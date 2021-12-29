import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    padding:2em 3em;
    background-color: red;
`

const Title = styled.div`
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: white;
`

export default function Header() {
    return (
        <StyledHeader>
            <Title>
                La mission du Grinch
            </Title>
        </StyledHeader>
    )
}
