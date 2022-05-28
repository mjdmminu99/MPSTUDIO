import './SchedulePage.css';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: '🟣 11am - Momo',
    allDay: true,
    start: new Date(2022, 5, 29),
    end: new Date(2022, 5, 29),
  },
];

function SchedulePage() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className='Class'>
      <div className='Head'>Schedule</div>
      <br />
      <hr />
      <br />
      <div className='class_row'>
        <h2>Add New Class</h2>
        <div>
          <input
            type='text'
            placeholder='Add Title'
            style={{ width: '20%', marginRight: '10px' }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText='Start Date'
            style={{ marginRight: '10px' }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            placeholderText='End Date'
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button
            stlye={{ marginTop: '10px' }}
            onClick={handleAddEvent}
            className='add'
          >
            Add Class
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 450, margin: '50px' }}
        />
      </div>
    </div>
  );
}

export default SchedulePage;
