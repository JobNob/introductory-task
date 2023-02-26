import React from 'react';
import './app.css';
import MainPage from './main-page';
import {Box} from "@mui/material";
import TopBar from "./top-bar";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';


export default function App() {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TopBar/>
                <Box sx={{pt: 5}}>
                    <MainPage/>
                </Box>
            </LocalizationProvider>
        </Box>
    );
}

