import React from 'react';
import '../app.css';
import {Button, Stack, TextField, Typography} from "@mui/material";

export default function MainPage() {
    return (
        <>
            <Stack sx={{height: "calc(100vh -40px)", width: "100%"}} spacing={2} alignItems="center">
                <Typography textAlign="center" variant="h5" sx={{mb: 2}}>
                    Новое задание
                </Typography>
                <TextField label="Название" variant="outlined" size="small" multiline
                           fullWidth
                           sx={{maxWidth: "300px"}}/>
                <TextField label="Срок сдачи" variant="outlined" size="small"
                           fullWidth
                           sx={{maxWidth: "300px"}}/>
                <Button variant="contained" color="primary">
                    Сохранить
                </Button>
            </Stack>
        </>
    );
};