import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { borderRadius } from "@material-ui/system";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Sadhana() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <div style={{ maxWidth: "100%" }}>
      <Box
        p={1}
        m={1}
        flexDirection="column"
        style={{ margin: "0 auto", backgroundColor: "#ffe6e6" }}
        display="flex"
        justifyContent="center"
      >
        <Box></Box>
        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "0 auto",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Sadhana Form
        </Box>

        <Box
          width={"50%"}
          boxShadow={1}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            border: "1px solid grey",
            borderRadius: "7px"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            JAI SHRILA PRABHUPADA
          </Box>
          <img
            alt="SHRILA PRABHUPADA"
            width="100%"
            src="https://lh5.googleusercontent.com/GB5GTYlZpej6FUu7oaWWNjaS1s8uBKlEkgfBJte-0cLryyfsHjouYVVM-pa_iEV-DJMCYBU0ldVo30dYMXyUUegkRL9-9NYRoXn8hHqmzUjGqtIglKfpHhm8n8Ai=w1024"
          />
        </Box>

        <Box
          width={"50%"}
          boxShadow={1}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            YOUR NAME
          </Box>
          <FormControl
            style={{ minWidth: 180 }}
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Choose
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // onChange={handleChange
              autoWidth
              label="Name"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Mayank</MenuItem>
              <MenuItem value={20}>Pranay</MenuItem>
              <MenuItem value={30}>Nilesh</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          width={"50%"}
          boxShadow={1}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            borderRadius: "7px",
            backgroundColor: "#ffffff",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            WAKE UP TIME
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time you woke up today morning?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            SLEEP TIME
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time did you go to bed last night?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            SLEEP TIME
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time did you go to bed last night?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            CHANTING
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time did you go to bed last night?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            READING
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            How many rounds did you chant yesterday?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            HEARING *
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time did you go to bed last night?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={1}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            TOTAL SLEEP *
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            What time did you go to bed last night?
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>

        <Box
          width={"50%"}
          boxShadow={0.8}
          style={{
            margin: "10px auto",
            // marginTop: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            border: "1px solid grey"
          }}
          fontSize={16}
          // fontWeight={300}
          textAlign="left"
        >
          <Box style={{ fontWeight: 300, margin: "10px auto 10px 5px" }}>
            PREACHING (BOOK DISTRIBUTION) *
          </Box>

          <Box
            style={{
              fontWeight: 100,
              fontSize: "14px",
              fontFamily: "Roboto,Arial,sans-serif",
              margin: "10px auto 10px 5px"
            }}
          >
            A/B (A=No. of Preaching Minutes B= No. of books distributed )
          </Box>

          <form className={classes.container} noValidate>
            <TextField
              id="time"
              // label="wake up time"

              type="time"
              // defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: false
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </form>
        </Box>
      </Box>
    </div>
  );
}
