import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import {Typography} from '@material-ui/core';
import {FormCard} from '../../components/FormCard'
import './sadhana.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

export default function Sadhana() {
    const [selectedDate,
        handleDateChange] = useState(new Date());
    const classes = useStyles();

    return (
        <div style={{
            maxWidth: "100%"
        }}>
            <Box
                p={1}
                m={1}
                flexDirection="column"
                style={{
                margin: "0 auto",
                backgroundColor: "#ffe6e6"
            }}
                display="flex"
                justifyContent="center">
                <Box
                    width={"50%"}
                    className={'sadhana-field-card'}
                    fontSize="h2.fontSize"
                    textAlign="center">
                    Sadhana Form
                </Box>

                <Box
                    width={"50%"}
                    className={'sadhana-field-card'}
                    fontSize={16}
                    textAlign="left">
                    <Box
                        style={{
                        fontWeight: 300,
                        margin: "10px auto 10px 5px"
                    }}>
                        JAI SHRILA PRABHUPADA
                    </Box>
                    <img
                        alt="SHRILA PRABHUPADA"
                        width="100%"
                        src="https://lh5.googleusercontent.com/GB5GTYlZpej6FUu7oaWWNjaS1s8uBKlEkgfBJte-0cLryyfsHjouYVVM-pa_iEV-DJMCYBU0ldVo30dYMXyUUegkRL9-9NYRoXn8hHqmzUjGqtIglKfpHhm8n8Ai=w1024"/>
                </Box>
                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'WAKE UP TIME'}
                    subTitle={'What time you woke up today morning?'}/>

                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'SLEEP TIME'}
                    subTitle={'What time did you go to bed last night?'}/>

                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'CHANTING *'}
                    subTitle={'What time did you go to bed last night?'}/>
                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'READING *'}
                    subTitle={'How much minutes did you read yesterday?'}/>
                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'HEARING *'}
                    subTitle={'What time did you go to bed last night?'}/>

                <FormCard
                    inputType="time"
                    inputLable="Lable"
                    title={'TOTAL SLEEP *'}
                    subTitle={'What time did you go to bed last night?'}/>

                <FormCard
                    inputType="text"
                    inputLable="Lable"
                    title={'PREACHING (BOOK DISTRIBUTION) *'}
                    subTitle={'A/B (A=No. of Preaching Minutes B= No. of books distributed )'}/>
            </Box>
        </div>
    );
}
