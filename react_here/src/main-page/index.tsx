import React from 'react';
import '../app.css';
import dayjs, {Dayjs} from 'dayjs';
import {Box, Button, IconButton, Stack, Switch, TextField, Typography} from "@mui/material";
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function MainPage() {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack sx={{height: "calc(100vh -40px)", width: "100%"}} alignItems={"center"}>
                <Typography textAlign="center" variant="h5" sx={{mb: 2}}>
                    Новое задание
                </Typography>
                <Stack spacing={2} alignItems="end" sx={{width: 400}}>


                    <TextField label="Название" variant="outlined" multiline
                               minRows={4}
                               fullWidth
                    />
                    <DateTimePicker
                        label="Срок сдачи"
                        value={value}

                        onChange={handleChange}
                        renderInput={(params) => <TextField size={"small"} {...params} />}/>
                    <IconButton aria-label="fingerprint" color="secondary">
                    </IconButton>

                    <Button variant="outlined" color="primary" fullWidth>
                        Сохранить
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};