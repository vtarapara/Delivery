import React, { useState, useEffect } from 'react';
import {DayPilotNavigator, DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import Modal from './Modal';
import db from '../utils/request';

const Calendar = ({ canEdit }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [delivery, setDelivery] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const openPopUp = (event) => {
    const id = event.e.data.id;
    setDelivery(events.find(x => x.id === id));
    setPopUpOpen(true);
  }
  useEffect(() => {
    db.get('delivery').then(x => setEvents(x.data));
  }, []);
  return (
    <div>
      <Modal delivery={delivery} open={popUpOpen} setOpen={setPopUpOpen} canEdit={canEdit} events={events} setEvents={setEvents}/>
      <DayPilotNavigator selectMode='week'
          onTimeRangeSelected={ args => setDate(args.day)}
        />
      <DayPilotCalendar viewType="Week" startDate={date} headerDateFormat="M/dd"
        events={events.map(event => {
          const start = new Date(event.start);
          const end = new Date(event.end);
          return ({
            ...event,
            text: `${event.company}: ${event.description}`,
            start: start.setHours(start.getHours() - 4),
            end: end.setHours(end.getHours()-4),
          });
        })}
        onEventClick={(event) => openPopUp(event)} eventMoveHandling='Disabled'/>
    </div>
  );
};

export default Calendar;