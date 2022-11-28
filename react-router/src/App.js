import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookRoute from "./BookRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const linkStyles = {
    textDecoration: "none",
    display: "block",
    color: "white",
  };

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' style={linkStyles}>
            <HomeIcon fontsize='large' />
          </Link>
          <Typography variant='h5' align='left' pl={2} component='div' sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Link to='/books/' style={linkStyles}>
            <Button color='inherit'>Books</Button>
          </Link>
          <Button color='inherit'>SignUp</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/books/*' element={<BookRoute />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
