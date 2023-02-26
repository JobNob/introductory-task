import React from 'react';
import '../app.css';
import {Button, Card, Stack, TextField, Typography} from "@mui/material";

export default function LoginPage() {
    return (
        <div>
            <Stack sx={{height: "100vh", width: "100%"}} justifyContent="center" alignItems="center">
                <Card variant="outlined" sx={{height: 270, width: 480, p: 3}}>
                    <Stack spacing={2.5}>
                        <Typography textAlign="center" variant="h4" sx={{mb: 2}}>
                            Login
                        </Typography>
                        <TextField fullWidth label="Username" variant="outlined" size="small"/>
                        <TextField fullWidth label="Password" variant="outlined" size="small" type="password"/>
                        <Button variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                        <Stack alignItems="end">
                            <Button variant="text" size="small" color="inherit">
                                Зарегистрироваться
                            </Button>
                        </Stack>
                    </Stack>

                </Card>
            </Stack>
            {/*<div style={{flex: 1}}>*/}
            {/*    <div className="login_center_block">*/}
            {/*        <h3>*/}
            {/*            Login*/}
            {/*        </h3>*/}
            {/*            <input type="text" className="input" name="username" placeholder="username"></input>*/}
            {/*            <input type="password" className="input" name="password" placeholder="password"></input>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};