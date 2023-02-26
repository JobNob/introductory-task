import {AppBar, Box, Button} from "@mui/material";
import React from "react";

export default function TopBar() {
    return (
        <AppBar position="fixed" color="default" variant="outlined" elevation={0}>
            <Box alignSelf="end">
                <Button variant="text" size="small" color="inherit">
                    Войти
                </Button>
            </Box>
        </AppBar>
    );
}