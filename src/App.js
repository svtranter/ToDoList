import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
import Links from "./Links";
import VisibleTaskList from "./VisibleTaskList";

const App = (props) => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand>To Do List</Navbar.Brand>
      </Navbar>
      <Container>
        <Add />
        <Links />
        <VisibleTaskList />
      </Container>
    </>
  );
};

export default App;
