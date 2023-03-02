import React, {useState} from 'react';
import '../app.css';
import dayjs, {Dayjs} from 'dayjs';
import {Box, Button, IconButton, Stack, Switch, TextField, Typography} from "@mui/material";
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';


function AddDateOfEnd(props: any): any {
    const [isExtended, setIsExtended] = useState(true);
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    if (props.isEx == true) {
        return (
            <DateTimePicker
                label="Время начала"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField size={"small"} {...params} />}
            />
        )
    }
    return;
}

function AddTimeToDo(props: any): any {
    if (props.isEx == true) {
        return (
            <TextField label="Время на выполнение"
                       variant="outlined"
                       size={"small"}
                       sx={{width: 160}}
            />
        )
    }
    return;
}

function ArrowPointer(props: any): any {
    if (props.isEx === false) {
        return <ArrowDropDownIcon/>;
    } else {
        return <ArrowDropUp/>;
    }
}

export default function MainPage() {
    const [isExtended, setIsExtended] = useState(true);
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const arrowSpinning = [
        {transform: "rotate(180deg)"}
    ];

    const arrowTiming = {
        duration: 100
    };

    return (
        <>
            <Stack sx={{height: "calc(100vh -40px)", width: "100%"}} alignItems={"center"}>
                <Typography textAlign="center" variant="h5" sx={{mb: 2}}>
                    Новое задание
                </Typography>
                <Stack spacing={2} alignItems="end" sx={{width: 400}}>

                    <TextField label="Название"
                               variant="outlined"
                               multiline
                               minRows={4}
                               fullWidth
                    />

                    <Stack spacing={2} direction="row" alignItems="flex-end">
                        <Stack direction="column" sx={{gap: 2}} alignItems="self-start">
                            <IconButton aria-label="ArrowIcon"
                                        color="primary"
                                        id="extentionArrow"
                                        onClick={() => {
                                            let arrow: any = document.getElementById("extentionArrow")!.animate(arrowSpinning, arrowTiming);
                                            arrow.onfinish = () => {
                                                setIsExtended(!isExtended);
                                            }
                                        }}>
                                <ArrowPointer isEx={isExtended}/>
                            </IconButton>
                            <AddTimeToDo isEx={isExtended}/>
                        </Stack>
                        <Stack direction="column" sx={{gap: 2}}>
                            <DateTimePicker
                                label="Срок сдачи"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField size={"small"} {...params} />}
                            />
                            <AddDateOfEnd isEx={isExtended}/>
                        </Stack>
                    </Stack>


                    <Button variant="outlined"
                            color="primary"
                            fullWidth>
                        Сохранить
                    </Button>

                </Stack>

            </Stack>
        </>
    );
};
