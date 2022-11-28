import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";
const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({n: ""});
  const number = searchParams.get("n");
  return (
    <>
      <Box p={2} display={"flex"} flexDirection='column'>
        <Link to='/books/1'>Book 1</Link>
        <Link to='/books/2'>Book 2</Link>
        {number ? <Link to={`/books/${number}`}>Book {number}</Link> : null}
        {/* <Link to={`/books/${number}`}>Book {number}</Link> */}
        <Link to='/books/new'>New Book</Link>
        <Outlet />
      </Box>
      <form action=''>
        <Box p={2}>
          <TextField
            label='Book Number'
            variant='standard'
            fullWidth
            value={number}
            onChange={(e) => setSearchParams({n: e.target.value})}
          ></TextField>
        </Box>
        <Box px={2}>
          <Button type='submit' variant='contained' startIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default BookLayout;
