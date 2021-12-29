import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing/Landing'
import Header from '../header/Header'
import Answer from './Answer/Answer'
import Mobile from './Mobile/Mobile'

const Box = styled.div`
    width: 100vw;
    height: 75vh;
    text-align: center;
`

export default function Main() {
    return (
        <Box>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/01" element={<Answer />} />
                    <Route path="/mobile" element={<Mobile />} />
                </Routes>
            </Router>
        </Box>
    )
}
