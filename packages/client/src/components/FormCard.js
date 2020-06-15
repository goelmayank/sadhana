import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import '../pages/Sadhana/sadhana.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

export const FormCard = (props) => {
    const classes = useStyles();
    const getInputField = ({inputType, inputLable}) => {
        console.log(inputType)
        switch (inputType) {
            case 'number':
                return (<TextField type={inputType} label={inputLable} variant="outlined"/>);
                break;
            case 'text':
                return (<TextField type={inputType} label={inputLable} variant="outlined"/>);
                break;
            case 'time':
                return (
                    <form
                        style={{
                        margin: '5px'
                    }}
                        className={classes.container}
                        noValidate>
                        <TextField
                            id="time"
                            type="time"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: false
                        }}
                            inputProps={{
                            step: 300
                        }}/>
                    </form>
                )
        }
    }
    const {title, subTitle, inputType, inputLable} = props
    return (
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
                {title}
            </Box>

            <Box className={'card-subtitle'}>
                {subTitle}
            </Box>

            <form
                style={{
                margin: '5px'
            }}
                className={classes.container}
                noValidate>
                {getInputField({
                    inputType: inputType || 'text',
                    inputLable: inputLable || ''
                })}
            </form>
        </Box>
    )
}