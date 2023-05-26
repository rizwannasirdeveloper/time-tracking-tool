import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";

const TimeEntryList = ({ timeEntries, onDelete, onUpdate, fetchTotal }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [updatedTask, setUpdatedTask] = useState("");
  const [updatedStartTime, setUpdatedStartTime] = useState("");
  const [updatedEndTime, setUpdatedEndTime] = useState("");

  const handleDelete = (id) => {
    onDelete(id);
  };

 const handleUpdate = (id, entry) => {
   setSelectedEntry({ id, ...entry });
   setUpdatedTask(entry.task);
   setUpdatedStartTime(entry.startTime);
   setUpdatedEndTime(entry.endTime);
   setShowModal(true);
 };


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntry(null);
    setUpdatedTask("");
    setUpdatedStartTime("");
    setUpdatedEndTime("");
  };

const handleSubmitUpdate = () => {
  const formattedStartTime = new Date(updatedStartTime)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const formattedEndTime = new Date(updatedEndTime)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const updatedEntry = {
    ...selectedEntry,
    task: updatedTask,
    startTime: formattedStartTime,
    endTime: formattedEndTime,
  };

  onUpdate(selectedEntry.id, updatedEntry);
  handleCloseModal();
};


  return (
    <div style={{marginTop:"35px"}}>
      <h2>Time Entries</h2>
      {timeEntries.map((entry) => (
        <Card key={entry.id} className="mb-3">
          <Card.Body>
            <Card.Title>Task: {entry.task}</Card.Title>
            <Card.Text>User ID: {entry.userId}</Card.Text>
            <Card.Text>Start Time: {entry.startTime}</Card.Text>
            <Card.Text>End Time: {entry.endTime}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleUpdate(entry.id, entry)}
            >
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(entry.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Time Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTask">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formStartTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="text"
                value={updatedStartTime}
                onChange={(e) => setUpdatedStartTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEndTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="text"
                value={updatedEndTime}
                onChange={(e) => setUpdatedEndTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimeEntryList;
