import { AppBar, Toolbar, Box, Typography, FormControl, Select } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState, ChangeEvent, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      minWidth: 120,
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //State
  const classes = useStyles();
  const [position, setPosition] = useState<string>("Developer");
  const [data, setDate] = useState<Date>(() => new Date(Date.now()));

  const onPositionChange = (e: ChangeEvent<{ value: unknown }>): void => {
    //Obligation Casting
    setPosition(e.target.value as string);
  };

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date(Date.now())), 1000);
  }, []);

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
          <Typography variant='h6'>My Movies </Typography>
          <WelcomeMessage position={position} />
          <Box textAlign='center'>
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange.bind(this)}
                  className={classes.positionSelect}>
                  <option value='Developer'>Developer</option>
                  <option value='Designer'>Designer</option>
                  <option value='Product Manager'>Product Manager</option>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
              <Typography variant='h6'>Time :{data.toUTCString()}</Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
