import React from 'react';
import './app.css';
import MainPage from './main-page';
import {Box} from "@mui/material";
import TopBar from "./top-bar";

export default function App() {
    return (
        <Box>
            <TopBar/>
            <Box sx={{pt: 5}}>
                <MainPage/>
            </Box>
        </Box>
    );
}

