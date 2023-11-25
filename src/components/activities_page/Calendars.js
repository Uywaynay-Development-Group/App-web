import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import axios from 'axios'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/styles.css";

const Calendars = () => {

  const [activities, setActivities] = useState([]);
  const id = localStorage.getItem('id');


  useEffect(() => {
    axios
    .get(`https://uywaxwasi-api.onrender.com/activities/${id}`)
    .then(res => {
      setActivities(res.data.activities)
    })
    .catch(error => {
      console.error('Error fetching activities: ', error);
    });
  } , []);
  

  const locales = {
      "en-US": require("date-fns/locale/en-US"),
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
      title: "Big Meeting",
      allDay: true,
      start: new Date(2023, 6, 0),
      end: new Date(2023, 6, 0),
    },
    {
      title: "Vacation",
      start: new Date(2023, 6, 7),
      end: new Date(2023, 6, 10),
    },
    {
      title: "Conference",
      start: new Date(2023, 6, 20),
      end: new Date(2023, 6, 23),
    },
  ];
      
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handlePostActivity = (activity) => {
    axios.post('https://uywaxwasi-api.onrender.com/activities', {
      content: activity.title,
      start: activity.start,
      end: activity.end,
      user: id
    })
      .then(response => {
        alert("Actividad registrada")
      })
      .catch(error => {
        alert("Error al registrar actividad")
      })
  };

  const handleDeleteEvent = () => {
    axios.get(`https://uywaxwasi-api.onrender.com/activity/${newEvent.title}`)
    .then(res => {
      console.log(res.data.activity)
      axios.delete(`https://uywaxwasi-api.onrender.com/activities/${res.data.activity.id}`)
      .then(res => {
        alert("Actividad eliminada")
      })
      .catch(error => {
        alert("Error al eliminar actividad")
      });
    })
    .catch(error => {
      console.error('Error fal conseguir actividad: ', error);
    });
  }

  const handleAddEvent = () => {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (
        (d1 <= d2 && d2 <= d3) ||
        (d1 <= d4 && d4 <= d3)
      ) {
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
    handlePostActivity(newEvent);
  };

  return (
    <div>
      <div className="calendar">
        <div className="subtitle">
          <p>Agregar Actividad</p>
          
        </div>
        <hr />
        <div className="calendar-inputs">
          <input
            type="text"
            placeholder="Descripcion"
            style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <DatePicker
            placeholderText="inicio"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            placeholderText="fin"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Agregar
          </button>
          <button style={{ marginTop: "10px" }} onClick={handleDeleteEvent}>
            Eliminar
          </button>
        </div>
        <div className="calendar_box">
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
        
      </div>
    </div>
  );
};

export default Calendars;