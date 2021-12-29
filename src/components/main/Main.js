import React, { useState } from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Header from '../header/Header';
import Answer from './Answer/Answer';
import Sucess from './Success/Sucess';

const Box = styled.div`
    width: 100vw;
    height: 75vh;
    text-align: center;
`

export default function Main() {
    const [number, setNumber] = useState(0);

    return (
        <Box>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/answer" element={<Answer number={number} setNumber={setNumber}/>} />
                    <Route path="/success" element={<Sucess number={number}/>} />
                </Routes>
            </Router>
        </Box>
    )
}
