import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TimeEntryForm = ({ onSubmit }) => {
  const [userId, setUserId] = useState("");
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userId, task, startTime, endTime });
    setUserId("");
    setTask("");
    setStartTime("");
    setEndTime("");
    alert("Time Entry Created")
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Create a Time Entry
      </h2>
      <Form.Group controlId="userId" style={{ marginTop: "10px" }}>
        <Form.Label style={{ marginBottom: "0px" }}>User ID:</Form.Label>
        <Form.Control
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="task" style={{ marginTop: "10px" }}>
        <Form.Label style={{ marginBottom: "0px" }}>Task:</Form.Label>
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="startTime" style={{ marginTop: "10px" }}>
        <Form.Label style={{ marginBottom: "0px" }}>Start Time:</Form.Label>
        <Form.Control
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="endTime" style={{ marginTop: "10px" }}>
        <Form.Label style={{ marginBottom: "0px" }}>End Time:</Form.Label>
        <Form.Control
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
        Create
      </Button>
    </Form>
  );
};

export default TimeEntryForm;
