import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addTask } from "./actions";

const Add = (props) => {
  let input;
  return (
    <>
      <Card className="mb-5 mt-2" bg="secondary">
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              props.dispatch(addTask(input.value));
              input.value = "";
            }}
          >
            <input
              ref={(node) => {
                input = node;
              }}
            />

            <Button className="ml-5" type="submit">
              Add Task{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect()(Add);
