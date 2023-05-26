import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import TimeEntryForm from './components/TimeEntryForm';
import TimeEntryList from './components/TimeEntryList';
import NavBar from './components/NavBar';

const App = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const fetchTimeEntries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/time-entries');
      setTimeEntries(response.data);
    } catch (error) {
      console.error('Error fetching time entries:', error);
    }
  };

  const createTimeEntry = async (entry) => {
    try {
      await axios.post('http://localhost:5000/time-entries', entry);
      fetchTimeEntries();
    } catch (error) {
      console.error('Error creating time entry:', error);
    }
  };

  const updateTimeEntry = async (id, entry) => {
    try {
      await axios.put(`http://localhost:5000/time-entries/${id}`, entry);
      fetchTimeEntries();
    } catch (error) {
      console.error('Error updating time entry:', error);
    }
  };

  const deleteTimeEntry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/time-entries/${id}`);
      fetchTimeEntries();
    } catch (error) {
      console.error('Error deleting time entry:', error);
    }
  };

  return (
   <>
      <NavBar />
      <Container>
            <Routes>
              <Route
                path="/time-entry-form"
                element={<TimeEntryForm onSubmit={createTimeEntry} />}
              />
              <Route
                path="/time-entry-list"
                element={
                  <TimeEntryList
                  timeEntries={timeEntries}
                  onDelete={deleteTimeEntry}
                  onUpdate={updateTimeEntry}
                  />
                        }
              />
              </Routes>
    </Container>
   </>
  );
};

export default App;
